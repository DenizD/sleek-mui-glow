
import React from 'react';
import { Box, Typography, FormControl, Select, MenuItem, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

const MuiDashboardHeader = () => {
  const [selectedMonth, setSelectedMonth] = React.useState('june-2025');

  const handleMonthChange = (event: any) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Paper
          elevation={3}
          sx={{
            width: 56,
            height: 56,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #43BEAC 0%, #30A390 100%)',
            borderRadius: 2,
          }}
        >
          <FontAwesomeIcon icon={faTrophy} style={{ color: 'white', fontSize: '24px' }} />
        </Paper>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 700, 
            color: '#25242E',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          Consumption
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: 500, color: '#747474' }}>
          Month
        </Typography>
        <FormControl size="small">
          <Select
            value={selectedMonth}
            onChange={handleMonthChange}
            sx={{
              minWidth: 160,
              backgroundColor: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E0E0E0',
              },
            }}
          >
            <MenuItem value="june-2025">June 2025</MenuItem>
            <MenuItem value="may-2025">May 2025</MenuItem>
            <MenuItem value="april-2025">April 2025</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiDashboardHeader;
