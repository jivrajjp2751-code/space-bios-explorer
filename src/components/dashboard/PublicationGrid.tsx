import { useState } from "react";
import { ExternalLink, Sparkles, Calendar, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data - will be replaced with real data
const mockPublications = [
  {
    id: 1,
    title: "Effects of Microgravity on Plant Growth Patterns in Space Station Environments",
    authors: "Smith, J., Johnson, A., Williams, R.",
    year: 2023,
    organism: "Arabidopsis thaliana",
    topics: ["Microgravity", "Plant Biology", "Space Adaptation"],
    impact: "high",
    summary: "This study examines how microgravity affects plant growth patterns and cellular development."
  },
  {
    id: 2,
    title: "Bone Density Changes in Long-Duration Spaceflight: A Comprehensive Analysis",
    authors: "Martinez, L., Chen, K.",
    year: 2023,
    organism: "Humans",
    topics: ["Bone Health", "Microgravity", "Human Physiology"],
    impact: "high",
    summary: "Analysis of bone density loss in astronauts during extended space missions."
  },
  {
    id: 3,
    title: "Microbial Adaptation to Space Environment: Gene Expression Studies",
    authors: "Anderson, T., Lee, S., Brown, M.",
    year: 2022,
    organism: "E. coli",
    topics: ["Microbiology", "Gene Expression", "Space Adaptation"],
    impact: "medium",
    summary: "Investigation of how bacteria adapt their gene expression in microgravity conditions."
  },
  {
    id: 4,
    title: "Cardiovascular Function During Extended Spaceflight Missions",
    authors: "Thompson, R., Garcia, E.",
    year: 2023,
    organism: "Humans",
    topics: ["Cardiovascular System", "Human Health", "Microgravity"],
    impact: "high",
    summary: "Study of cardiovascular adaptations and potential health risks in long-term space travel."
  },
  {
    id: 5,
    title: "Radiation Effects on DNA Repair Mechanisms in Space",
    authors: "Wilson, P., Kim, J., Davis, H.",
    year: 2022,
    organism: "Human cells",
    topics: ["Radiation Biology", "DNA Repair", "Space Health"],
    impact: "high",
    summary: "Research on how cosmic radiation impacts cellular DNA repair processes."
  },
  {
    id: 6,
    title: "Sleep Patterns and Circadian Rhythms in Microgravity Environments",
    authors: "Moore, C., Taylor, N.",
    year: 2023,
    organism: "Humans",
    topics: ["Sleep Science", "Circadian Biology", "Human Performance"],
    impact: "medium",
    summary: "Analysis of sleep quality and circadian rhythm disruptions during spaceflight."
  }
];

interface PublicationGridProps {
  searchQuery: string;
}

const PublicationGrid = ({ searchQuery }: PublicationGridProps) => {
  const [selectedPublication, setSelectedPublication] = useState<number | null>(null);

  const filteredPublications = mockPublications.filter(pub => 
    searchQuery === "" || 
    pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pub.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase())) ||
    pub.organism.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted-foreground">
          Showing {filteredPublications.length} publications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPublications.map((pub, index) => (
          <Card
            key={pub.id}
            className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/50 group"
            style={{ animationDelay: `${index * 50}ms` }}
            onClick={() => setSelectedPublication(pub.id)}
          >
            <div className="space-y-4">
              {/* Impact Badge */}
              <div className="flex items-center justify-between">
                <Badge
                  variant={pub.impact === "high" ? "default" : "secondary"}
                  className="capitalize"
                >
                  {pub.impact} Impact
                </Badge>
                <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg leading-tight line-clamp-3 group-hover:text-primary transition-colors">
                {pub.title}
              </h3>

              {/* Metadata */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="line-clamp-1">{pub.authors}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{pub.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Organism:</span>
                  <span className="italic">{pub.organism}</span>
                </div>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-2">
                {pub.topics.slice(0, 3).map(topic => (
                  <Badge key={topic} variant="outline" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>

              {/* AI Summary Preview */}
              <div className="pt-3 border-t border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-primary">AI Summary</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {pub.summary}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PublicationGrid;
