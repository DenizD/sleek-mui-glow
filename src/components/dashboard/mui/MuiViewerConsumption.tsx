
import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import { useScenarioData } from './hooks/useScenarioData';
import { generateMetrics } from './utils/metricsUtils';
import ScenarioSwitcher from './components/ScenarioSwitcher';
import PlanBadge from './components/PlanBadge';
import ConsumptionHeader from './components/ConsumptionHeader';
import MetricsGrid from './components/MetricsGrid';
import UsageProgress from './components/UsageProgress';
import StatusAlert from './components/StatusAlert';
import { PlanDetails } from './types/ViewerConsumptionTypes';

const MuiViewerConsumption = () => {
  const { isExceededScenario, setIsExceededScenario, currentScenario } = useScenarioData();

  const planDetails: PlanDetails = {
    name: "Starter Plan",
    inclusiveViewers: 1000,
    pricePerViewer: 0.10,
    currentUsage: currentScenario.currentUsage,
    usagePercentage: currentScenario.usagePercentage
  };

  const packageVolume = planDetails.inclusiveViewers;
  const currentUsage = planDetails.currentUsage;
  const overage = Math.max(0, currentUsage - packageVolume);
  const additionalCosts = overage * planDetails.pricePerViewer;
  
  const remainingInclusive = Math.max(0, packageVolume - currentUsage);
  const usedInclusive = Math.min(currentUsage, packageVolume);
  const inclusiveUsagePercentage = Math.min((usedInclusive / packageVolume) * 100, 100);

  const metrics = generateMetrics(planDetails, overage, remainingInclusive, additionalCosts);

  return (
    <Card 
      elevation={0}
      sx={{ 
        backgroundColor: '#FFFFFF',
        border: '1px solid #E8EAF0',
        borderRadius: '24px',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '700px'
      }}
    >
      <ScenarioSwitcher 
        isExceededScenario={isExceededScenario}
        onToggle={setIsExceededScenario}
      />

      <PlanBadge planName={planDetails.name} />

      <CardContent sx={{ p: 0 }}>
        <ConsumptionHeader />

        <Box sx={{ px: 6, py: 6 }}>
          <MetricsGrid metrics={metrics} />
          
          <UsageProgress 
            inclusiveUsagePercentage={inclusiveUsagePercentage}
            packageVolume={packageVolume}
          />

          <StatusAlert scenario={currentScenario} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MuiViewerConsumption;
