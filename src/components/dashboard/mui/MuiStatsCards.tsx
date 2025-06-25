
import React from 'react';
import { Box, Card, CardContent, Typography, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faScissors } from '@fortawesome/free-solid-svg-icons';

const MuiStatsCards = () => {
  const stats = [
    {
      title: "Shows Streamed",
      value: "8",
      icon: faDesktop,
      color: '#3890C5',
      bgColor: '#E3F2FD',
    },
    {
      title: "Clips Uploaded", 
      value: "5",
      icon: faScissors,
      color: '#43BEAC',
      bgColor: '#E0F2F1',
    }
  ];

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
      {stats.map((stat, index) => (
        <Card 
          key={index} 
          sx={{
            backgroundColor: stat.bgColor,
            border: `2px solid ${stat.color}20`,
            borderRadius: 3,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            }
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#747474', 
                    fontWeight: 500, 
                    mb: 1,
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {stat.title}
                </Typography>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700, 
                    color: '#25242E',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {stat.value}
                </Typography>
              </Box>
              <Paper
                elevation={3}
                sx={{
                  width: 56,
                  height: 56,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: stat.color,
                  borderRadius: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  }
                }}
              >
                <FontAwesomeIcon 
                  icon={stat.icon} 
                  style={{ color: 'white', fontSize: '24px' }} 
                />
              </Paper>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default MuiStatsCards;
