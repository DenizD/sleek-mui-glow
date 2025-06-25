
import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Metric } from '../types/ViewerConsumptionTypes';

interface MetricsGridProps {
  metrics: Metric[];
}

const MetricsGrid: React.FC<MetricsGridProps> = ({ metrics }) => {
  return (
    <Box sx={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(4, 1fr)', 
      gap: 5,
      mb: 6
    }}>
      {metrics.map((metric, index) => (
        <Tooltip key={index} title={metric.tooltip} placement="top">
          <Box sx={{ 
            textAlign: 'center',
            p: 5,
            borderRadius: 5,
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            minHeight: '160px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            '&:hover': {
              transform: 'translateY(-6px)',
              boxShadow: '0 16px 40px #64748B20'
            }
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 2.5 }}>
              <FontAwesomeIcon 
                icon={metric.icon} 
                style={{ 
                  fontSize: '20px', 
                  color: metric.iconColor
                }} 
              />
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#64748B',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                {metric.title}
              </Typography>
            </Box>
            <Typography 
              variant="h1" 
              sx={{ 
                fontWeight: 800,
                color: '#1A1A1A',
                fontSize: index === 0 ? '2rem' : '3.5rem',
                lineHeight: 1,
                mb: 2,
                letterSpacing: '-0.03em',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              {metric.value}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#9CA3AF',
                fontSize: '0.95rem',
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif'
              }}
            >
              {metric.subtitle}
            </Typography>
          </Box>
        </Tooltip>
      ))}
    </Box>
  );
};

export default MetricsGrid;
