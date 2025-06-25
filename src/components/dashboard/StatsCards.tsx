
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Scissors } from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      title: "Shows Streamed",
      value: "8",
      icon: Monitor,
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100"
    },
    {
      title: "Clips Uploaded", 
      value: "5",
      icon: Scissors,
      color: "bg-gradient-to-r from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-100"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className={`${stat.bgColor} ${stat.borderColor} border-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group`}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 mb-2">{stat.title}</p>
                <p className="text-4xl font-bold text-slate-800">{stat.value}</p>
              </div>
              <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
