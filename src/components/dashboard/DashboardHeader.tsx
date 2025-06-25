
import { Calendar, Trophy } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
          <Trophy className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-800">Consumption</h1>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-slate-600">Month</span>
        <Select defaultValue="june-2025">
          <SelectTrigger className="w-40 bg-white border-slate-200 shadow-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="june-2025">June 2025</SelectItem>
            <SelectItem value="may-2025">May 2025</SelectItem>
            <SelectItem value="april-2025">April 2025</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default DashboardHeader;
