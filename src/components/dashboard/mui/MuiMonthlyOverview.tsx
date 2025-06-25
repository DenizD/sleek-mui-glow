
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Chip,
  Box,
  Paper
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const MuiMonthlyOverview = () => {
  const data = [
    {
      month: "June 2025",
      totalViewers: 2540,
      viewersShows: 1800,
      viewersClips: 740,
      showsStreamed: 8,
      clipsUploaded: 5,
      status: "Exceeded by 1540",
      statusColor: "error" as const
    },
    {
      month: "May 2025", 
      totalViewers: 2200,
      viewersShows: 1500,
      viewersClips: 700,
      showsStreamed: 7,
      clipsUploaded: 6,
      status: "Exceeded by 1200",
      statusColor: "error" as const
    },
    {
      month: "All Time",
      totalViewers: 12000,
      viewersShows: 8500,
      viewersClips: 3500,
      showsStreamed: 40,
      clipsUploaded: 32,
      status: "Exceeded by 11000",
      statusColor: "error" as const
    }
  ];

  return (
    <Card sx={{ borderRadius: 3 }}>
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 100%)',
          borderBottom: '1px solid #E0E0E0',
          p: 3
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FontAwesomeIcon icon={faCalendar} style={{ color: '#25242E', fontSize: '20px' }} />
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              color: '#25242E',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Monthly Overview
          </Typography>
        </Box>
      </Box>
      <CardContent sx={{ p: 0 }}>
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#F5F5F5' }}>
                <TableCell sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                  Month
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                  Total Viewers
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                  Viewers (Shows)
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                  Viewers (Clips)
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                  Shows Streamed
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                  Clips Uploaded
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow 
                  key={index}
                  sx={{ 
                    '&:hover': { backgroundColor: '#F5F5F5' },
                    transition: 'background-color 0.2s ease'
                  }}
                >
                  <TableCell sx={{ fontWeight: 500, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                    {row.month}
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                    {row.totalViewers.toLocaleString()}
                  </TableCell>
                  <TableCell align="right" sx={{ color: '#747474', fontFamily: 'Inter, sans-serif' }}>
                    {row.viewersShows.toLocaleString()}
                  </TableCell>
                  <TableCell align="right" sx={{ color: '#747474', fontFamily: 'Inter, sans-serif' }}>
                    {row.viewersClips.toLocaleString()}
                  </TableCell>
                  <TableCell align="right" sx={{ color: '#747474', fontFamily: 'Inter, sans-serif' }}>
                    {row.showsStreamed}
                  </TableCell>
                  <TableCell align="right" sx={{ color: '#747474', fontFamily: 'Inter, sans-serif' }}>
                    {row.clipsUploaded}
                  </TableCell>
                  <TableCell align="right">
                    <Chip 
                      label={row.status}
                      color={row.statusColor}
                      size="small"
                      sx={{ 
                        fontWeight: 500,
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.75rem'
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default MuiMonthlyOverview;
