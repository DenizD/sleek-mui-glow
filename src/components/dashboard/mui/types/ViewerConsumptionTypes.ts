
export interface ScenarioData {
  currentUsage: number;
  usagePercentage: number;
  alertType: 'success' | 'warning';
  alertIcon: any;
  alertTitle: string;
  alertDescription: string;
  alertColors: {
    backgroundColor: string;
    borderColor: string;
    color: string;
    iconColor: string;
  };
}

export interface PlanDetails {
  name: string;
  inclusiveViewers: number;
  pricePerViewer: number;
  currentUsage: number;
  usagePercentage: number;
}

export interface Metric {
  title: string;
  value: string;
  subtitle: string;
  tooltip: string;
  icon: any;
  iconColor: string;
}

export interface BadgeColors {
  bg: string;
  color: string;
  border: string;
}
