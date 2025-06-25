
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const MonthlyOverview = () => {
  const data = [
    {
      month: "June 2025",
      totalViewers: 2540,
      viewersShows: 1800,
      viewersClips: 740,
      showsStreamed: 8,
      clipsUploaded: 5,
      status: "Exceeded by 1540",
      statusColor: "bg-red-100 text-red-700 border-red-200"
    },
    {
      month: "May 2025", 
      totalViewers: 2200,
      viewersShows: 1500,
      viewersClips: 700,
      showsStreamed: 7,
      clipsUploaded: 6,
      status: "Exceeded by 1200",
      statusColor: "bg-red-100 text-red-700 border-red-200"
    },
    {
      month: "All Time",
      totalViewers: 12000,
      viewersShows: 8500,
      viewersClips: 3500,
      showsStreamed: 40,
      clipsUploaded: 32,
      status: "Exceeded by 11000",
      statusColor: "bg-red-100 text-red-700 border-red-200"
    }
  ];

  return (
    <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
        <CardTitle className="flex items-center space-x-2 text-xl font-semibold text-slate-800">
          <Calendar className="w-5 h-5" />
          <span>Monthly Overview</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left p-4 font-semibold text-slate-700">Month</th>
                <th className="text-right p-4 font-semibold text-slate-700">Total Viewers</th>
                <th className="text-right p-4 font-semibold text-slate-700">Viewers (Shows)</th>
                <th className="text-right p-4 font-semibold text-slate-700">Viewers (Clips)</th>
                <th className="text-right p-4 font-semibold text-slate-700">Shows Streamed</th>
                <th className="text-right p-4 font-semibold text-slate-700">Clips Uploaded</th>
                <th className="text-right p-4 font-semibold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
                  <td className="p-4 font-medium text-slate-800">{row.month}</td>
                  <td className="p-4 text-right font-semibold text-slate-800">{row.totalViewers.toLocaleString()}</td>
                  <td className="p-4 text-right text-slate-600">{row.viewersShows.toLocaleString()}</td>
                  <td className="p-4 text-right text-slate-600">{row.viewersClips.toLocaleString()}</td>
                  <td className="p-4 text-right text-slate-600">{row.showsStreamed}</td>
                  <td className="p-4 text-right text-slate-600">{row.clipsUploaded}</td>
                  <td className="p-4 text-right">
                    <Badge className={`${row.statusColor} font-medium px-3 py-1 rounded-full text-xs`}>
                      {row.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;
