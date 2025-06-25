
import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

interface UsageProgressProps {
  inclusiveUsagePercentage: number;
  packageVolume: number;
}

const UsageProgress: React.FC<UsageProgressProps> = ({ inclusiveUsagePercentage, packageVolume }) => {
  return (
    <>
      <Typography 
        variant="h5" 
        sx={{ 
          color: '#1A1A1A', 
          mb: 5, 
          fontSize: '1.5rem', 
          fontWeight: 600,
          fontFamily: 'Inter, sans-serif'
        }}
      >
        Inclusive Volume Usage
      </Typography>
      
      <Box sx={{ position: 'relative', mb: 5 }}>
        <LinearProgress
          variant="determinate"
          value={inclusiveUsagePercentage}
          sx={{
            height: 20,
            borderRadius: 10,
            backgroundColor: '#F3F4F6',
            '& .MuiLinearProgress-bar': {
              borderRadius: 10,
              background: inclusiveUsagePercentage >= 100 
                ? 'linear-gradient(90deg, #F59E0B 0%, #D97706 100%)'
                : 'linear-gradient(90deg, #3890C5 0%, #43BEAC 100%)',
            },
          }}
        />
        <Typography
          variant="body1"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight: 700,
            fontSize: '0.9rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.6)',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          {Math.round(inclusiveUsagePercentage)}%
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 5 }}>
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#9CA3AF', 
            fontSize: '0.95rem',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500
          }}
        >
          0 Viewers
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#9CA3AF', 
            fontSize: '0.95rem',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500
          }}
        >
          {packageVolume.toLocaleString()} Viewers (Inclusive Max)
        </Typography>
      </Box>
    </>
  );
};

export default UsageProgress;
