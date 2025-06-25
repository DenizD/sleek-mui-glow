
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ViewerDistribution from "@/components/dashboard/ViewerDistribution";
import StatsCards from "@/components/dashboard/StatsCards";
import MonthlyOverview from "@/components/dashboard/MonthlyOverview";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <DashboardHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ViewerDistribution />
          </div>
          <div className="lg:col-span-2">
            <StatsCards />
          </div>
        </div>
        
        <MonthlyOverview />
      </div>
    </div>
  );
};

export default Index;
