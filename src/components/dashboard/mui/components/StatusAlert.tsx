
import React from 'react';
import { Alert, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScenarioData } from '../types/ViewerConsumptionTypes';

interface StatusAlertProps {
  scenario: ScenarioData;
}

const StatusAlert: React.FC<StatusAlertProps> = ({ scenario }) => {
  return (
    <Alert 
      severity={scenario.alertType}
      icon={<FontAwesomeIcon icon={scenario.alertIcon} />}
      sx={{ 
        backgroundColor: scenario.alertColors.backgroundColor,
        borderColor: scenario.alertColors.borderColor,
        color: scenario.alertColors.color,
        padding: '20px 24px',
        borderRadius: '16px',
        fontSize: '1rem',
        '& .MuiAlert-icon': {
          color: scenario.alertColors.iconColor,
          fontSize: '1.2rem'
        }
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ 
          fontWeight: 600, 
          mb: 1.5, 
          fontSize: '1.1rem',
          fontFamily: 'Inter, sans-serif'
        }}
      >
        {scenario.alertTitle}
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          fontSize: '0.95rem', 
          lineHeight: 1.6,
          fontFamily: 'Inter, sans-serif'
        }}
      >
        {scenario.alertDescription}
      </Typography>
    </Alert>
  );
};

export default StatusAlert;
