
import React from 'react';
import { Card, CardContent, Typography, Box, Tooltip } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const data = [
  { name: "Shows", value: 1800, color: "#43BEAC", percentage: 70.9 },
  { name: "Clips", value: 740, color: "#3890C5", percentage: 29.1 }
];

const MuiViewerDistribution = () => {
  const totalViewers = 2540;
  const limitExceeded = 1540;
  const usagePercentage = 254; // 2540/1000 * 100

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
          Viewer-Verteilung
        </Typography>
        
        <Box sx={{ position: 'relative', height: 250, mb: 3 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <RechartsTooltip 
                formatter={(value, name) => [
                  `${value.toLocaleString()} Viewer (${data.find(d => d.name === name)?.percentage}%)`, 
                  name
                ]}
                labelStyle={{ display: 'none' }}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #E2E8F0',
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
              variant="h4" 
              sx={{ 
                fontWeight: 700, 
                color: '#25242E',
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.75rem'
              }}
            >
              {totalViewers.toLocaleString()}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#747474',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem'
              }}
            >
              Gesamt-Viewer
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                color: '#DC2626',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600
              }}
            >
              {usagePercentage}% des Limits
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ mb: 3 }}>
          {data.map((item, index) => (
            <Tooltip key={index} title={`${item.percentage}% der Gesamt-Viewer`} placement="left">
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                mb: 2,
                p: 2,
                borderRadius: 2,
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: '#F1F5F9',
                  transform: 'translateY(-1px)'
                }
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box 
                    sx={{
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      backgroundColor: item.color,
                      boxShadow: `0 0 8px ${item.color}40`
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
                  <FontAwesomeIcon 
                    icon={faInfoCircle} 
                    style={{ 
                      fontSize: '12px', 
                      color: '#9CA3AF',
                      opacity: 0.6
                    }} 
                  />
                </Box>
                <Box sx={{ textAlign: 'right' }}>
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
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: '#64748B',
                      fontSize: '0.75rem'
                    }}
                  >
                    {item.percentage}%
                  </Typography>
                </Box>
              </Box>
            </Tooltip>
          ))}
        </Box>
        
        {/* Enhanced Alert */}
        <Box sx={{ 
          p: 3,
          background: 'linear-gradient(135deg, #FEF2F2 0%, #FDE8E8 100%)',
          borderRadius: 2,
          border: '1px solid #FECACA'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <FontAwesomeIcon 
              icon={faExclamationTriangle} 
              style={{ 
                color: '#DC2626', 
                fontSize: '16px',
                marginTop: '2px'
              }} 
            />
            <Box>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#DC2626', 
                  fontSize: '0.875rem', 
                  fontWeight: 600,
                  lineHeight: 1.4,
                  mb: 1
                }}
              >
                Limit um {limitExceeded.toLocaleString()} Viewer überschritten
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#991B1B', 
                  fontSize: '0.75rem',
                  lineHeight: 1.4
                }}
              >
                Shows machen {data[0].percentage}% Ihres Verbrauchs aus. 
                Optimierung der Show-Strategie könnte Kosten reduzieren.
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MuiViewerDistribution;
