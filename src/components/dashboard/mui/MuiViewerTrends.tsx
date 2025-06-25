
import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, FormControl, Select, MenuItem, Tooltip } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const monthlyData = [
  { month: 'Jan 2025', viewers: 850, limit: 1000, growth: 0 },
  { month: 'Feb 2025', viewers: 920, limit: 1000, growth: 8.2 },
  { month: 'Mär 2025', viewers: 1150, limit: 1000, growth: 25.0 },
  { month: 'Apr 2025', viewers: 1380, limit: 1000, growth: 20.0 },
  { month: 'Mai 2025', viewers: 1890, limit: 1000, growth: 37.0 },
  { month: 'Jun 2025', viewers: 2540, limit: 1000, growth: 34.4 },
];

const MuiViewerTrends = () => {
  const [timeRange, setTimeRange] = useState('6months');

  const handleTimeRangeChange = (event: any) => {
    setTimeRange(event.target.value);
  };

  const getFilteredData = () => {
    switch(timeRange) {
      case '3months':
        return monthlyData.slice(-3);
      case '6months':
        return monthlyData;
      case '12months':
        return monthlyData; // Würde in echter App mehr Daten enthalten
      default:
        return monthlyData;
    }
  };

  const currentMonth = monthlyData[monthlyData.length - 1];
  const projectedNextMonth = Math.round(currentMonth.viewers * 1.25); // 25% geschätzter Zuwachs

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              color: '#25242E',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Viewer-Verbrauch Entwicklung
          </Typography>
          
          <FormControl size="small">
            <Select
              value={timeRange}
              onChange={handleTimeRangeChange}
              sx={{
                minWidth: 140,
                backgroundColor: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#E0E0E0',
                },
              }}
            >
              <MenuItem value="3months">3 Monate</MenuItem>
              <MenuItem value="6months">6 Monate</MenuItem>
              <MenuItem value="12months">12 Monate</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Box sx={{ height: 300, mb: 3 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={getFilteredData()}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12, fontFamily: 'Inter, sans-serif' }}
                stroke="#747474"
              />
              <YAxis 
                tick={{ fontSize: 12, fontFamily: 'Inter, sans-serif' }}
                stroke="#747474"
              />
              <RechartsTooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #E0E0E0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'Inter, sans-serif'
                }}
                formatter={(value, name) => [
                  value.toLocaleString() + ' Viewer',
                  name === 'viewers' ? 'Verbrauch' : 'Limit'
                ]}
              />
              <ReferenceLine 
                y={1000} 
                stroke="#FF8E03" 
                strokeDasharray="5 5" 
                label={{ value: "Paketlimit", position: "right" }}
              />
              <Line 
                type="monotone" 
                dataKey="viewers" 
                stroke="#3890C5" 
                strokeWidth={3}
                dot={{ fill: '#3890C5', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#3890C5', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        {/* Enhanced Legend */}
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 16, height: 3, backgroundColor: '#3890C5', borderRadius: 1 }} />
            <Typography variant="body2" sx={{ color: '#747474', fontFamily: 'Inter, sans-serif' }}>
              Monatlicher Verbrauch
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 16, height: 1, backgroundColor: '#FF8E03', borderRadius: 1, border: '1px dashed #FF8E03' }} />
            <Typography variant="body2" sx={{ color: '#747474', fontFamily: 'Inter, sans-serif' }}>
              Paketlimit (1.000 Viewer)
            </Typography>
          </Box>
        </Box>

        {/* Enhanced Analysis with Metrics */}
        <Box sx={{ 
          background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)', 
          borderRadius: 2, 
          p: 3,
          border: '1px solid #E2E8F0'
        }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#25242E', mb: 2 }}>
            Trend-Analyse & Prognose:
          </Typography>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mb: 2 }}>
            <Box>
              <Typography variant="caption" sx={{ color: '#64748B', fontSize: '0.75rem' }}>
                Aktuelles Wachstum
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#25242E' }}>
                +{currentMonth.growth}%
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: '#64748B', fontSize: '0.75rem' }}>
                Prognose nächster Monat
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#DC2626' }}>
                ~{projectedNextMonth.toLocaleString()} Viewer
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: '#64748B', fontSize: '0.75rem' }}>
                Überschreitung seit
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#25242E' }}>
                März 2025
              </Typography>
            </Box>
          </Box>

          <Typography variant="body2" sx={{ color: '#747474', mb: 1 }}>
            • Kontinuierlicher Anstieg des Viewer-Verbrauchs seit Januar
          </Typography>
          <Typography variant="body2" sx={{ color: '#747474', mb: 1 }}>
            • Paketlimit seit März konstant überschritten
          </Typography>
          <Typography variant="body2" sx={{ color: '#FF8E03', fontWeight: 500 }}>
            • Empfehlung: Upgrade zu einem 3.000+ Viewer-Paket erwägen
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MuiViewerTrends;
