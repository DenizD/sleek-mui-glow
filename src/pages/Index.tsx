
import React from 'react';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { muiTheme } from '@/theme/muiTheme';
import MuiDashboardHeader from '@/components/dashboard/mui/MuiDashboardHeader';
import MuiViewerConsumption from '@/components/dashboard/mui/MuiViewerConsumption';
import MuiMonthlyOverview from '@/components/dashboard/mui/MuiMonthlyOverview';

const Index = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
          py: 3
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <MuiDashboardHeader />
            
            {/* Combined Consumption & Plan Overview */}
            <MuiViewerConsumption />
            
            {/* Monthly Overview */}
            <MuiMonthlyOverview />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Index;
