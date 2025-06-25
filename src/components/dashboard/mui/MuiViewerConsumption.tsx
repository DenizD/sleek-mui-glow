
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  LinearProgress,
  Button,
  Divider
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const MuiViewerConsumption = () => {
  const packageLimit = 1000;
  const currentUsage = 2540;
  const overage = Math.max(0, currentUsage - packageLimit);
  const costPerViewer = 0.10;
  const additionalCosts = overage * costPerViewer;
  const usagePercentage = (currentUsage / packageLimit) * 100;

  const metrics = [
    {
      title: "Package limit",
      value: packageLimit.toLocaleString(),
      subtitle: "Included viewers"
    },
    {
      title: "Current usage", 
      value: currentUsage.toLocaleString(),
      subtitle: "This month"
    },
    {
      title: "Overage",
      value: overage.toLocaleString(),
      subtitle: "Additional viewers"
    },
    {
      title: "Additional costs",
      value: `${additionalCosts.toFixed(2)} €`,
      subtitle: `${costPerViewer.toFixed(2)} €/viewer`
    }
  ];

  return (
    <Card sx={{ borderRadius: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#25242E' }}>
            Viewer Consumption
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              size="small"
              variant="outlined"
              startIcon={<FontAwesomeIcon icon={faFilePdf} />}
              sx={{ 
                textTransform: 'none',
                fontSize: '0.75rem',
                minWidth: 'auto',
                px: 2,
                py: 0.5,
                borderColor: '#E0E0E0',
                color: '#747474',
                '&:hover': { borderColor: '#43BEAC', color: '#43BEAC' }
              }}
            >
              Export as PDF
            </Button>
            <Button
              size="small"
              variant="outlined"
              startIcon={<FontAwesomeIcon icon={faDownload} />}
              sx={{ 
                textTransform: 'none',
                fontSize: '0.75rem',
                minWidth: 'auto',
                px: 2,
                py: 0.5,
                borderColor: '#E0E0E0',
                color: '#747474',
                '&:hover': { borderColor: '#43BEAC', color: '#43BEAC' }
              }}
            >
              Export as CSV
            </Button>
          </Box>
        </Box>

        {/* Key Metrics Grid */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: 3,
          mb: 3
        }}>
          {metrics.map((metric, index) => (
            <Box key={index}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#747474', 
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  mb: 0.5
                }}
              >
                {metric.title}
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  color: index === 3 && overage > 0 ? '#D32F2F' : '#25242E',
                  fontSize: '2rem',
                  lineHeight: 1,
                  mb: 0.5
                }}
              >
                {metric.value}
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#AEAEAE',
                  fontSize: '0.65rem'
                }}
              >
                {metric.subtitle}
              </Typography>
              {/* Progress bar for each metric */}
              <Box sx={{ mt: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={index === 0 ? 100 : index === 1 ? Math.min(usagePercentage, 100) : index === 2 ? Math.min((overage / packageLimit) * 100, 100) : 100}
                  sx={{
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: '#F5F5F5',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: index === 0 ? '#43BEAC' : 
                                     index === 1 ? (currentUsage > packageLimit ? '#D32F2F' : '#43BEAC') :
                                     index === 2 ? '#D32F2F' : '#FF8E03',
                      borderRadius: 2,
                    },
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Usage Overview */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ color: '#747474', mb: 1, fontSize: '0.75rem' }}>
            Usage Overview
          </Typography>
          <Box sx={{ mb: 1 }}>
            <LinearProgress
              variant="determinate"
              value={Math.min(usagePercentage, 100)}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: '#F5F5F5',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: overage > 0 ? '#D32F2F' : '#43BEAC',
                  borderRadius: 4,
                },
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="caption" sx={{ color: '#AEAEAE', fontSize: '0.65rem' }}>
              0
            </Typography>
            <Typography variant="caption" sx={{ color: '#AEAEAE', fontSize: '0.65rem' }}>
              {packageLimit.toLocaleString()} (Limit)
            </Typography>
          </Box>
        </Box>

        {/* Status Message */}
        {overage > 0 && (
          <Box sx={{ 
            p: 1.5,
            backgroundColor: '#FFF3E0',
            borderRadius: 1,
            border: '1px solid #FFE0B2'
          }}>
            <Typography variant="body2" sx={{ color: '#E65100', fontSize: '0.75rem', fontWeight: 500 }}>
              Package limit exceeded • Additional costs apply
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default MuiViewerConsumption;
