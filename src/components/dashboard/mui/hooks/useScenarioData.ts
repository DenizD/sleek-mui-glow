
import { useState } from 'react';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { ScenarioData } from '../types/ViewerConsumptionTypes';

export const useScenarioData = () => {
  const [isExceededScenario, setIsExceededScenario] = useState(false);

  const scenarioData: Record<string, ScenarioData> = {
    withinLimits: {
      currentUsage: 750,
      usagePercentage: 75,
      alertType: 'success',
      alertIcon: faCheckCircle,
      alertTitle: 'Within inclusive volume: 250 viewers remaining',
      alertDescription: 'You are currently using 750 of your 1,000 inclusive viewers. No additional charges apply.',
      alertColors: {
        backgroundColor: '#F0FDF4',
        borderColor: '#BBF7D0',
        color: '#166534',
        iconColor: '#10B981'
      }
    },
    exceeded: {
      currentUsage: 1250,
      usagePercentage: 125,
      alertType: 'warning',
      alertIcon: faExclamationTriangle,
      alertTitle: 'Inclusive volume exceeded: Usage-based pricing active',
      alertDescription: 'You have used 1,250 viewers this month. 250 additional viewers beyond your inclusive volume will be charged at €0.10 per viewer.',
      alertColors: {
        backgroundColor: '#FFFBEB',
        borderColor: '#FED7AA',
        color: '#92400E',
        iconColor: '#F59E0B'
      }
    }
  };

  const currentScenario = isExceededScenario ? scenarioData.exceeded : scenarioData.withinLimits;

  return {
    isExceededScenario,
    setIsExceededScenario,
    currentScenario
  };
};
