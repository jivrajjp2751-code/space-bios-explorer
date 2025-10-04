import { BookOpen, Network, Microscope, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    label: "Total Publications",
    value: "608",
    description: "NASA Space Biology studies",
    icon: BookOpen,
    color: "text-nasa-orange"
  },
  {
    label: "Research Areas",
    value: "11",
    description: "Major topic categories",
    icon: Network,
    color: "text-space-blue"
  },
  {
    label: "Model Organisms",
    value: "7+",
    description: "From cells to humans",
    icon: Microscope,
    color: "text-cosmic-purple"
  },
  {
    label: "Time Span",
    value: "2015-2024",
    description: "Years of research",
    icon: Calendar,
    color: "text-nasa-orange"
  }
];

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card
          key={stat.label}
          className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-border/50"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
              <p className="text-3xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
            <div className={`p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatsOverview;
