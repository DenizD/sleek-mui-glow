
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const monthlyData = [
  { month: 'Jan 2025', viewers: 850, limit: 1000 },
  { month: 'Feb 2025', viewers: 920, limit: 1000 },
  { month: 'Mär 2025', viewers: 1150, limit: 1000 },
  { month: 'Apr 2025', viewers: 1380, limit: 1000 },
  { month: 'Mai 2025', viewers: 1890, limit: 1000 },
  { month: 'Jun 2025', viewers: 2540, limit: 1000 },
];

const MuiViewerTrends = () => {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent sx={{ p: 3 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 3, 
            fontWeight: 600, 
            color: '#25242E',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          Viewer-Verbrauch Entwicklung
        </Typography>
        
        <Box sx={{ height: 300, mb: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
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
              <Tooltip 
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

        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
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

        <Box sx={{ mt: 3, p: 2, backgroundColor: '#F5F5F5', borderRadius: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#25242E', mb: 1 }}>
            Trend-Analyse:
          </Typography>
          <Typography variant="body2" sx={{ color: '#747474', mb: 1 }}>
            • Kontinuierlicher Anstieg des Viewer-Verbrauchs seit Januar
          </Typography>
          <Typography variant="body2" sx={{ color: '#747474', mb: 1 }}>
            • Paketlimit seit März überschritten
          </Typography>
          <Typography variant="body2" sx={{ color: '#FF8E03', fontWeight: 500 }}>
            • Empfehlung: Upgrade zu einem größeren Paket erwägen
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MuiViewerTrends;
