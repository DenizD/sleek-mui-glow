
import React from 'react';
import { Card, CardContent, Typography, Box, Alert } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const data = [
  { name: "Shows", value: 1800, color: "#43BEAC" },
  { name: "Clips", value: 740, color: "#3890C5" }
];

const MuiViewerDistribution = () => {
  const totalViewers = 2540;
  const limitExceeded = 1540;

  return (
    <Card sx={{ height: 'fit-content', borderRadius: 3 }}>
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
          Viewer Distribution
        </Typography>
        
        <Box sx={{ position: 'relative', height: 250, mb: 3 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [value.toLocaleString(), '']}
                labelStyle={{ display: 'none' }}
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'Inter, sans-serif'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <Box 
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center'
            }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700, 
                color: '#25242E',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              {totalViewers.toLocaleString()}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#747474',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Total Viewers
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ mb: 3 }}>
          {data.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box 
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: item.color
                  }}
                />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 500, 
                    color: '#25242E',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 600, 
                  color: '#25242E',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                {item.value.toLocaleString()}
              </Typography>
            </Box>
          ))}
        </Box>
        
        <Alert 
          severity="error" 
          icon={<FontAwesomeIcon icon={faExclamationTriangle} />}
          sx={{ 
            borderRadius: 2,
            '& .MuiAlert-message': {
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem'
            }
          }}
        >
          Limit exceeded by {limitExceeded.toLocaleString()} viewers
        </Alert>
      </CardContent>
    </Card>
  );
};

export default MuiViewerDistribution;
