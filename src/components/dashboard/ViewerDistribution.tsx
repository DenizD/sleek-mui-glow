
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

const data = [
  { name: "Shows", value: 1800, color: "#14b8a6" },
  { name: "Clips", value: 740, color: "#7dd3fc" }
];

const ViewerDistribution = () => {
  const totalViewers = 2540;
  const limitExceeded = 1540;

  return (
    <Card className="h-fit bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-slate-800">Viewer Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-64 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [value.toLocaleString(), '']}
                labelStyle={{ display: 'none' }}
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800">{totalViewers.toLocaleString()}</div>
              <div className="text-sm text-slate-500">Total Viewers</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium text-slate-700">{item.name}</span>
              </div>
              <span className="text-sm font-semibold text-slate-800">{item.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-3 bg-red-50 rounded-xl border border-red-100">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-red-700">
              Limit exceeded by {limitExceeded.toLocaleString()} viewers
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ViewerDistribution;
