import { TrendingUp, Microscope, Beaker, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    label: "Research Impact",
    value: "High",
    change: "+12%",
    icon: TrendingUp,
    color: "text-primary"
  },
  {
    label: "Active Topics",
    value: "54",
    change: "+8",
    icon: Beaker,
    color: "text-accent"
  },
  {
    label: "Organisms",
    value: "217",
    change: "+23",
    icon: Microscope,
    color: "text-space-purple"
  },
  {
    label: "Key Insights",
    value: "1.2K",
    change: "+156",
    icon: Target,
    color: "text-cosmic-pink"
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
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                {stat.change} this month
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
