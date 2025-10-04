import { useState } from "react";
import { Search, Sparkles, TrendingUp, Network, FileText, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import StatsOverview from "@/components/dashboard/StatsOverview";
import PublicationGrid from "@/components/dashboard/PublicationGrid";
import KnowledgeGraph from "@/components/dashboard/KnowledgeGraph";
import FilterPanel from "@/components/dashboard/FilterPanel";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeView, setActiveView] = useState<"grid" | "graph">("grid");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-space-dark via-space-blue/20 to-space-purple/20 border-b border-border">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              AI-Powered Research Explorer
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              NASA Bioscience
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-space-purple">
                Publication Explorer
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore 608 NASA bioscience publications with AI-powered summaries, 
              knowledge graphs, and actionable insights for space research.
            </p>

            {/* Search Bar */}
            <Card className="p-2 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search publications, topics, organisms, or experiments..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-0 focus-visible:ring-0 text-base"
                  />
                </div>
                <Button size="lg" className="px-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">608</div>
                <div className="text-sm text-muted-foreground">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Research Topics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-space-purple">200+</div>
                <div className="text-sm text-muted-foreground">Organisms Studied</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Stats Overview */}
        <div className="mb-8 animate-slide-up">
          <StatsOverview />
        </div>

        {/* View Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Button
              variant={activeView === "grid" ? "default" : "outline"}
              onClick={() => setActiveView("grid")}
              className="gap-2"
            >
              <FileText className="w-4 h-4" />
              Publications
            </Button>
            <Button
              variant={activeView === "graph" ? "default" : "outline"}
              onClick={() => setActiveView("graph")}
              className="gap-2"
            >
              <Network className="w-4 h-4" />
              Knowledge Graph
            </Button>
          </div>

          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mb-6 animate-slide-up">
            <FilterPanel />
          </div>
        )}

        {/* Content Area */}
        <div className="animate-fade-in">
          {activeView === "grid" ? (
            <PublicationGrid searchQuery={searchQuery} />
          ) : (
            <KnowledgeGraph />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
