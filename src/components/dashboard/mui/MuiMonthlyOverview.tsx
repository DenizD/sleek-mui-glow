
import React, { useState } from 'react';
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
  Paper,
  IconButton,
  Tooltip
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

const MuiMonthlyOverview = () => {
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const data = [
    {
      month: "Juni 2025",
      totalViewers: 2540,
      viewersShows: 1800,
      viewersClips: 740,
      showsStreamed: 8,
      clipsUploaded: 5,
      status: "Überschritten um 1.540",
      statusColor: "error" as const,
      statusValue: 254,
      bgColor: '#FEF2F2'
    },
    {
      month: "Mai 2025", 
      totalViewers: 1890,
      viewersShows: 1350,
      viewersClips: 540,
      showsStreamed: 7,
      clipsUploaded: 6,
      status: "Überschritten um 890",
      statusColor: "error" as const,
      statusValue: 189,
      bgColor: '#FEF2F2'
    },
    {
      month: "April 2025",
      totalViewers: 1380,
      viewersShows: 980,
      viewersClips: 400,
      showsStreamed: 6,
      clipsUploaded: 4,
      status: "Überschritten um 380",
      statusColor: "warning" as const,
      statusValue: 138,
      bgColor: '#FEF3C7'
    },
    {
      month: "März 2025",
      totalViewers: 1150,
      viewersShows: 820,
      viewersClips: 330,
      showsStreamed: 5,
      clipsUploaded: 3,
      status: "Überschritten um 150",
      statusColor: "warning" as const,
      statusValue: 115,
      bgColor: '#FEF3C7'
    },
    {
      month: "Februar 2025",
      totalViewers: 920,
      viewersShows: 650,
      viewersClips: 270,
      showsStreamed: 4,
      clipsUploaded: 3,
      status: "Innerhalb Limit",
      statusColor: "success" as const,
      statusValue: 92,
      bgColor: '#F0FDF4'
    },
    {
      month: "Januar 2025",
      totalViewers: 850,
      viewersShows: 600,
      viewersClips: 250,
      showsStreamed: 4,
      clipsUploaded: 2,
      status: "Innerhalb Limit",
      statusColor: "success" as const,
      statusValue: 85,
      bgColor: '#F0FDF4'
    }
  ];

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: string) => {
    if (sortField !== field) return faSort;
    return sortDirection === 'asc' ? faSortUp : faSortDown;
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0;
    
    let aValue = a[sortField as keyof typeof a];
    let bValue = b[sortField as keyof typeof b];
    
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = (bValue as string).toLowerCase();
    }
    
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return (
    <Card sx={{ borderRadius: 3 }}>
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
          borderBottom: '1px solid #E2E8F0',
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
            Monatsübersicht
          </Typography>
        </Box>
      </Box>
      <CardContent sx={{ p: 0 }}>
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#F8FAFC' }}>
                <TableCell sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    Monat
                    <Tooltip title="Sortieren">
                      <IconButton 
                        size="small" 
                        onClick={() => handleSort('month')}
                        sx={{ p: 0.5 }}
                      >
                        <FontAwesomeIcon 
                          icon={getSortIcon('month')} 
                          style={{ fontSize: '12px', color: '#64748B' }} 
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                    Gesamt-Viewer
                    <Tooltip title="Sortieren">
                      <IconButton 
                        size="small" 
                        onClick={() => handleSort('totalViewers')}
                        sx={{ p: 0.5 }}
                      >
                        <FontAwesomeIcon 
                          icon={getSortIcon('totalViewers')} 
                          style={{ fontSize: '12px', color: '#64748B' }} 
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                  Viewer (Shows)
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                  Viewer (Clips)
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                    Shows gestreamt
                    <Tooltip title="Sortieren">
                      <IconButton 
                        size="small" 
                        onClick={() => handleSort('showsStreamed')}
                        sx={{ p: 0.5 }}
                      >
                        <FontAwesomeIcon 
                          icon={getSortIcon('showsStreamed')} 
                          style={{ fontSize: '12px', color: '#64748B' }} 
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                  Clips hochgeladen
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData.map((row, index) => (
                <TableRow 
                  key={index}
                  sx={{ 
                    backgroundColor: row.bgColor,
                    '&:hover': { 
                      backgroundColor: row.statusColor === 'error' ? '#FEE2E2' :
                                     row.statusColor === 'warning' ? '#FEF3C7' : '#E6FFFA'
                    },
                    transition: 'background-color 0.2s ease',
                    borderLeft: `4px solid ${
                      row.statusColor === 'error' ? '#DC2626' :
                      row.statusColor === 'warning' ? '#F59E0B' : '#10B981'
                    }`
                  }}
                >
                  <TableCell sx={{ fontWeight: 500, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                    {row.month}
                  </TableCell>
                  <TableCell align="right">
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography sx={{ fontWeight: 600, color: '#25242E', fontFamily: 'Inter, sans-serif' }}>
                        {row.totalViewers.toLocaleString()}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#64748B', fontSize: '0.75rem' }}>
                        {row.statusValue}% des Limits
                      </Typography>
                    </Box>
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
