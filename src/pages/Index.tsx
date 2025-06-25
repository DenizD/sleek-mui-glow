
import React from 'react';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { muiTheme } from '@/theme/muiTheme';
import MuiDashboardHeader from '@/components/dashboard/mui/MuiDashboardHeader';
import MuiViewerConsumption from '@/components/dashboard/mui/MuiViewerConsumption';
import MuiMonthlyOverview from '@/components/dashboard/mui/MuiMonthlyOverview';
import MuiViewerDistribution from '@/components/dashboard/mui/MuiViewerDistribution';

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
            
            {/* Main Content Grid */}
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
              gap: 3 
            }}>
              <MuiViewerConsumption />
              <MuiViewerDistribution />
            </Box>
            
            {/* Table Section */}
            <MuiMonthlyOverview />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Index;
