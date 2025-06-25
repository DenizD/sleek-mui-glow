
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  LinearProgress,
  Tooltip,
  Chip
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const MuiViewerConsumption = () => {
  const packageVolume = 1000;
  const currentUsage = 2540;
  const overage = Math.max(0, currentUsage - packageVolume);
  const costPerViewer = 0.10;
  const additionalCosts = overage * costPerViewer;
  const usagePercentage = (currentUsage / packageVolume) * 100;
  const percentageOfVolume = Math.round(usagePercentage);

  const metrics = [
    {
      title: "Inklusiv-Volumen",
      value: packageVolume.toLocaleString(),
      subtitle: "enthaltene Viewer",
      isHighlight: false,
      tooltip: "Die Anzahl der Viewer, die in Ihrem aktuellen Paket inbegriffen sind"
    },
    {
      title: "Aktueller Verbrauch", 
      value: currentUsage.toLocaleString(),
      subtitle: `${percentageOfVolume}% des Volumens`,
      isHighlight: false,
      tooltip: "Ihr bisheriger Viewer-Verbrauch in diesem Monat"
    },
    {
      title: "Mehrverbrauch",
      value: overage.toLocaleString(),
      subtitle: "zusätzliche Viewer",
      isHighlight: overage > 0,
      tooltip: "Viewer, die über Ihr Paket-Volumen hinausgehen"
    },
    {
      title: "Zusatzkosten",
      value: `€${additionalCosts.toFixed(2)}`,
      subtitle: `€${costPerViewer.toFixed(2)}/Viewer`,
      isHighlight: overage > 0,
      tooltip: "Kosten für den Mehrverbrauch basierend auf dem Pay-per-Use Modell"
    }
  ];

  const getStatusColor = () => {
    if (usagePercentage >= 100) return '#DC2626';
    if (usagePercentage >= 80) return '#F59E0B';
    return '#10B981';
  };

  const getStatusText = () => {
    if (usagePercentage >= 100) return 'Volumen überschritten';
    if (usagePercentage >= 80) return 'Kurz vor Volumen-Ende';
    return 'Innerhalb des Volumens';
  };

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
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 600, 
                color: '#1A1A1A',
                fontSize: '1.375rem',
                letterSpacing: '-0.01em',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Viewer-Verbrauch
            </Typography>
            <Chip
              icon={<FontAwesomeIcon icon={faExclamationTriangle} style={{ fontSize: '14px' }} />}
              label={getStatusText()}
              sx={{
                backgroundColor: usagePercentage >= 100 ? '#FEF2F2' : usagePercentage >= 80 ? '#FEF3C7' : '#F0FDF4',
                color: getStatusColor(),
                border: `1px solid ${usagePercentage >= 100 ? '#FECACA' : usagePercentage >= 80 ? '#FDE68A' : '#BBF7D0'}`,
                fontWeight: 500,
                fontSize: '0.75rem'
              }}
            />
          </Box>
        </Box>

        {/* Metrics Grid */}
        <Box sx={{ px: 4, pb: 4 }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: 4
          }}>
            {metrics.map((metric, index) => (
              <Tooltip key={index} title={metric.tooltip} placement="top">
                <Box sx={{ 
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)'
                  }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#6B7280',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        textTransform: 'none'
                      }}
                    >
                      {metric.title}
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
              </Tooltip>
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
              Verbrauchsübersicht
            </Typography>
            <LinearProgress
              variant="determinate"
              value={Math.min(usagePercentage, 100)}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: '#F3F4F6',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: getStatusColor(),
                  borderRadius: 4,
                  background: usagePercentage >= 100 
                    ? 'linear-gradient(90deg, #DC2626 0%, #B91C1C 100%)'
                    : usagePercentage >= 80 
                    ? 'linear-gradient(90deg, #F59E0B 0%, #D97706 100%)'
                    : 'linear-gradient(90deg, #10B981 0%, #059669 100%)',
                },
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Typography variant="caption" sx={{ color: '#9CA3AF', fontSize: '0.75rem' }}>
                0
              </Typography>
              <Typography variant="caption" sx={{ color: '#9CA3AF', fontSize: '0.75rem' }}>
                {packageVolume.toLocaleString()} Viewer
              </Typography>
            </Box>
          </Box>

          {/* Enhanced Status Alert */}
          {overage > 0 && (
            <Box sx={{ 
              mt: 3,
              p: 3,
              background: 'linear-gradient(135deg, #FEF2F2 0%, #FDE8E8 100%)',
              borderRadius: '12px',
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
                    Inklusiv-Volumen überschritten — Zusatzkosten fallen an
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: '#991B1B', 
                      fontSize: '0.75rem',
                      lineHeight: 1.4
                    }}
                  >
                    Erwägen Sie ein Upgrade zu einem größeren Paket für bessere Kosteneffizienz.
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MuiViewerConsumption;
