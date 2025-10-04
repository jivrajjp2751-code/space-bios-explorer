import { useState, useEffect } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { loadPublications, extractTopicsFromTitle, extractOrganismFromTitle, estimateYear, type Publication } from "@/lib/publicationsData";

interface PublicationGridProps {
  searchQuery: string;
}

const PublicationGrid = ({ searchQuery }: PublicationGridProps) => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPublications().then(data => {
      setPublications(data);
      setLoading(false);
    });
  }, []);

  const filteredPublications = publications.filter(pub => 
    searchQuery === "" || 
    pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    extractTopicsFromTitle(pub.title).some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase())) ||
    extractOrganismFromTitle(pub.title).toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-muted-foreground">Loading publications...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted-foreground">
          Showing {filteredPublications.length} of {publications.length} publications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPublications.slice(0, 30).map((pub, index) => {
          const topics = extractTopicsFromTitle(pub.title);
          const organism = extractOrganismFromTitle(pub.title);
          const year = estimateYear(pub.title, pub.id);
          
          return (
            <Card
              key={pub.id}
              className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/50 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="space-y-4">
                {/* Title & Link */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-lg leading-tight line-clamp-3 group-hover:text-primary transition-colors flex-1">
                    {pub.title}
                  </h3>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    onClick={() => window.open(pub.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                {/* Metadata */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Year:</span>
                    <span>~{year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Organism:</span>
                    <span className="italic">{organism}</span>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {topics.slice(0, 3).map(topic => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                {/* AI Summary Placeholder */}
                <div className="pt-3 border-t border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary">AI Analysis Available</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Click to view detailed AI-generated summary and insights
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      {filteredPublications.length > 30 && (
        <div className="text-center py-4">
          <p className="text-sm text-muted-foreground">
            Showing first 30 results. Use filters to narrow down your search.
          </p>
        </div>
      )}
    </div>
  );
};

export default PublicationGrid;
