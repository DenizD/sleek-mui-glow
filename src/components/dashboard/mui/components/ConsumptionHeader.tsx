
import React from 'react';
import { Box, Typography } from '@mui/material';

const ConsumptionHeader: React.FC = () => {
  return (
    <Box sx={{ 
      px: 6, 
      pt: 6, 
      pb: 5,
      background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              color: '#1A1A1A',
              fontSize: '2.5rem',
              letterSpacing: '-0.02em',
              fontFamily: 'Inter, sans-serif',
              mb: 1.5
            }}
          >
            Plan & Viewer Consumption
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#64748B',
              fontSize: '1.1rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400
            }}
          >
            Overview of your plan and monthly consumption
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ConsumptionHeader;
