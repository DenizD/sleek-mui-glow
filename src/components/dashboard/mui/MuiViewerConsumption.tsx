
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  LinearProgress
} from '@mui/material';

const MuiViewerConsumption = () => {
  const packageLimit = 1000;
  const currentUsage = 2540;
  const overage = Math.max(0, currentUsage - packageLimit);
  const costPerViewer = 0.10;
  const additionalCosts = overage * costPerViewer;
  const usagePercentage = (currentUsage / packageLimit) * 100;

  const metrics = [
    {
      title: "Package Limit",
      value: packageLimit.toLocaleString(),
      subtitle: "included viewers",
      isHighlight: false
    },
    {
      title: "Current Usage", 
      value: currentUsage.toLocaleString(),
      subtitle: "this month",
      isHighlight: false
    },
    {
      title: "Overage",
      value: overage.toLocaleString(),
      subtitle: "additional viewers",
      isHighlight: overage > 0
    },
    {
      title: "Additional Costs",
      value: `€${additionalCosts.toFixed(2)}`,
      subtitle: `€${costPerViewer.toFixed(2)}/viewer`,
      isHighlight: overage > 0
    }
  ];

  return (
    <Card 
      elevation={0}
      sx={{ 
        backgroundColor: '#FFFFFF',
        border: '1px solid #F0F0F0',
        borderRadius: '16px',
        overflow: 'hidden'
      }}
    >
      <CardContent sx={{ p: 0 }}>
        {/* Header */}
        <Box sx={{ px: 4, pt: 4, pb: 3 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600, 
              color: '#1A1A1A',
              fontSize: '1.375rem',
              letterSpacing: '-0.01em'
            }}
          >
            Viewer Consumption
          </Typography>
        </Box>

        {/* Metrics Grid */}
        <Box sx={{ px: 4, pb: 4 }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: 4
          }}>
            {metrics.map((metric, index) => (
              <Box key={index} sx={{ textAlign: 'left' }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#6B7280',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    mb: 1.5,
                    textTransform: 'none'
                  }}
                >
                  {metric.title}
                </Typography>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 700,
                    color: metric.isHighlight ? '#DC2626' : '#1A1A1A',
                    fontSize: '2.25rem',
                    lineHeight: 1,
                    mb: 0.5,
                    letterSpacing: '-0.02em'
                  }}
                >
                  {metric.value}
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: '#9CA3AF',
                    fontSize: '0.75rem',
                    fontWeight: 400
                  }}
                >
                  {metric.subtitle}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Divider */}
        <Box sx={{ height: '1px', backgroundColor: '#F3F4F6', mx: 4, mb: 4 }} />

        {/* Usage Progress */}
        <Box sx={{ px: 4, pb: 4 }}>
          <Box sx={{ mb: 2 }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#374151', 
                mb: 3, 
                fontSize: '0.875rem', 
                fontWeight: 500 
              }}
            >
              Usage Overview
            </Typography>
            <LinearProgress
              variant="determinate"
              value={Math.min(usagePercentage, 100)}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: '#F3F4F6',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: overage > 0 ? '#DC2626' : '#10B981',
                  borderRadius: 3,
                },
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Typography variant="caption" sx={{ color: '#9CA3AF', fontSize: '0.75rem' }}>
                0
              </Typography>
              <Typography variant="caption" sx={{ color: '#9CA3AF', fontSize: '0.75rem' }}>
                {packageLimit.toLocaleString()}
              </Typography>
            </Box>
          </Box>

          {/* Status Alert */}
          {overage > 0 && (
            <Box sx={{ 
              mt: 3,
              p: 3,
              backgroundColor: '#FEF2F2',
              borderRadius: '12px',
              border: '1px solid #FECACA'
            }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#DC2626', 
                  fontSize: '0.875rem', 
                  fontWeight: 500,
                  lineHeight: 1.4
                }}
              >
                Package limit exceeded — Additional costs apply
              </Typography>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MuiViewerConsumption;
