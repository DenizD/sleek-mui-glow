
import React from 'react';
import { Box, Chip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { BadgeColors } from '../types/ViewerConsumptionTypes';

interface PlanBadgeProps {
  planName: string;
}

const PlanBadge: React.FC<PlanBadgeProps> = ({ planName }) => {
  const getPlanBadgeColor = (): BadgeColors => {
    switch (planName) {
      case "Starter Plan": return { bg: '#E3F2FD', color: '#1976D2', border: '#BBDEFB' };
      case "Pro Plan": return { bg: '#F3E5F5', color: '#7B1FA2', border: '#CE93D8' };
      case "Enterprise Plan": return { bg: '#FFF3E0', color: '#F57C00', border: '#FFCC02' };
      default: return { bg: '#F5F5F5', color: '#666', border: '#E0E0E0' };
    }
  };

  const badgeColors = getPlanBadgeColor();

  return (
    <Box sx={{
      position: 'absolute',
      top: 20,
      right: 20,
      zIndex: 1
    }}>
      <Chip
        icon={<FontAwesomeIcon icon={faCrown} style={{ fontSize: '14px' }} />}
        label={planName}
        sx={{
          backgroundColor: badgeColors.bg,
          color: badgeColors.color,
          border: `1px solid ${badgeColors.border}`,
          fontWeight: 600,
          fontSize: '0.8rem',
          height: '36px',
          fontFamily: 'Inter, sans-serif'
        }}
      />
    </Box>
  );
};

export default PlanBadge;
