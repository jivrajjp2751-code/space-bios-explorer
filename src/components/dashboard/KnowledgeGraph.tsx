import { Card } from "@/components/ui/card";
import { Network, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const KnowledgeGraph = () => {
  return (
    <Card className="p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
              <Network className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Knowledge Graph</h2>
              <p className="text-sm text-muted-foreground">
                Explore connections between research topics, organisms, and findings
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="gap-2">
            <Info className="w-3 h-3" />
            Interactive View
          </Badge>
        </div>

        {/* Placeholder for knowledge graph visualization */}
        <div className="aspect-video bg-gradient-to-br from-primary/5 via-accent/5 to-space-purple/5 rounded-xl border-2 border-dashed border-border/50 flex items-center justify-center">
          <div className="text-center space-y-4 max-w-md p-8">
            <Network className="w-16 h-16 mx-auto text-primary animate-float" />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Interactive Knowledge Graph</h3>
              <p className="text-muted-foreground">
                This visualization will show connections between research topics, 
                organisms, experimental methods, and key findings across all 608 publications.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              <Badge variant="outline">Microgravity Effects</Badge>
              <Badge variant="outline">Plant Biology</Badge>
              <Badge variant="outline">Human Physiology</Badge>
              <Badge variant="outline">Gene Expression</Badge>
              <Badge variant="outline">Space Adaptation</Badge>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-primary"></div>
            <span className="text-sm">Research Topics</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-accent"></div>
            <span className="text-sm">Organisms</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-space-purple"></div>
            <span className="text-sm">Methods</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-cosmic-pink"></div>
            <span className="text-sm">Key Findings</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default KnowledgeGraph;
