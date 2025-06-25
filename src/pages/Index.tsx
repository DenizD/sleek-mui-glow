
import React from 'react';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { muiTheme } from '@/theme/muiTheme';
import MuiDashboardHeader from '@/components/dashboard/mui/MuiDashboardHeader';
import MuiStatsCards from '@/components/dashboard/mui/MuiStatsCards';
import MuiViewerConsumption from '@/components/dashboard/mui/MuiViewerConsumption';
import MuiViewerTrends from '@/components/dashboard/mui/MuiViewerTrends';
import MuiMonthlyOverview from '@/components/dashboard/mui/MuiMonthlyOverview';

const Index = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 100%)',
          py: 3
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <MuiDashboardHeader />
            
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
              gap: 3 
            }}>
              <MuiViewerConsumption />
              <MuiStatsCards />
            </Box>

            <MuiViewerTrends />
            
            <MuiMonthlyOverview />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Index;
