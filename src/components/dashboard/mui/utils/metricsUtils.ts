
import { faInfoCircle, faCheckCircle, faCrown } from '@fortawesome/free-solid-svg-icons';
import { Metric, PlanDetails, BadgeColors } from '../types/ViewerConsumptionTypes';

export const getPlanBadgeColor = (planName: string): BadgeColors => {
  switch (planName) {
    case "Starter Plan": return { bg: '#E3F2FD', color: '#1976D2', border: '#BBDEFB' };
    case "Pro Plan": return { bg: '#F3E5F5', color: '#7B1FA2', border: '#CE93D8' };
    case "Enterprise Plan": return { bg: '#FFF3E0', color: '#F57C00', border: '#FFCC02' };
    default: return { bg: '#F5F5F5', color: '#666', border: '#E0E0E0' };
  }
};

export const generateMetrics = (planDetails: PlanDetails, overage: number, remainingInclusive: number, additionalCosts: number): Metric[] => {
  const badgeColors = getPlanBadgeColor(planDetails.name);

  return [
    {
      title: "Current Plan",
      value: planDetails.name,
      subtitle: "subscribed package",
      tooltip: "Your currently subscribed plan",
      icon: faCrown,
      iconColor: badgeColors.color
    },
    {
      title: "Inclusive Viewers",
      value: planDetails.inclusiveViewers.toLocaleString(),
      subtitle: "included per month",
      tooltip: "The number of viewers included in your current package",
      icon: faCheckCircle,
      iconColor: '#10B981'
    },
    {
      title: "Current Usage", 
      value: planDetails.currentUsage.toLocaleString(),
      subtitle: overage > 0 ? `+${overage.toLocaleString()} additional` : `${remainingInclusive.toLocaleString()} remaining`,
      tooltip: "Your current viewer usage this month",
      icon: faInfoCircle,
      iconColor: '#3890C5'
    },
    {
      title: "Additional Costs",
      value: `€${additionalCosts.toFixed(2)}`,
      subtitle: `€${planDetails.pricePerViewer.toFixed(2)}/viewer`,
      tooltip: "Costs for additional viewers - automatically charged via your payment method",
      icon: faInfoCircle,
      iconColor: '#3890C5'
    }
  ];
};
