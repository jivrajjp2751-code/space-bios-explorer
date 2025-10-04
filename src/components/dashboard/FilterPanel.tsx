import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { X } from "lucide-react";

const FilterPanel = () => {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Filters</h3>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            Clear All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Year Range */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Publication Year</Label>
            <Slider defaultValue={[2020]} max={2024} min={2015} step={1} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>2015</span>
              <span>2024</span>
            </div>
          </div>

          {/* Impact Level */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Impact Level</Label>
            <div className="space-y-2">
              {["High", "Medium", "Low"].map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox id={`impact-${level}`} />
                  <label
                    htmlFor={`impact-${level}`}
                    className="text-sm cursor-pointer"
                  >
                    {level}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Topics */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Research Topics</Label>
            <div className="space-y-2">
              {["Microgravity", "Plant Biology", "Human Health", "Gene Expression"].map((topic) => (
                <div key={topic} className="flex items-center space-x-2">
                  <Checkbox id={`topic-${topic}`} />
                  <label
                    htmlFor={`topic-${topic}`}
                    className="text-sm cursor-pointer"
                  >
                    {topic}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Organisms */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Organisms</Label>
            <div className="space-y-2">
              {["Humans", "Plants", "Bacteria", "Cells"].map((organism) => (
                <div key={organism} className="flex items-center space-x-2">
                  <Checkbox id={`organism-${organism}`} />
                  <label
                    htmlFor={`organism-${organism}`}
                    className="text-sm cursor-pointer"
                  >
                    {organism}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Filters */}
        <div className="flex flex-wrap gap-2 pt-4 border-t">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          <Badge variant="secondary" className="gap-1">
            2023
            <X className="w-3 h-3 cursor-pointer" />
          </Badge>
          <Badge variant="secondary" className="gap-1">
            High Impact
            <X className="w-3 h-3 cursor-pointer" />
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export default FilterPanel;
