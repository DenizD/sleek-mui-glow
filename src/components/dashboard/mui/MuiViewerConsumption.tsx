
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  LinearProgress,
  Tooltip,
  Chip,
  Alert
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faInfoCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

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
      tooltip: "Die Anzahl der Viewer, die in Ihrem aktuellen Paket inbegriffen sind",
      icon: faCheckCircle,
      iconColor: '#10B981'
    },
    {
      title: "Aktueller Verbrauch", 
      value: currentUsage.toLocaleString(),
      subtitle: `${percentageOfVolume}% des Volumens`,
      isHighlight: false,
      tooltip: "Ihr bisheriger Viewer-Verbrauch in diesem Monat",
      icon: faInfoCircle,
      iconColor: '#3890C5'
    },
    {
      title: "Mehrverbrauch",
      value: overage.toLocaleString(),
      subtitle: "zusätzliche Viewer",
      isHighlight: overage > 0,
      tooltip: "Viewer, die über Ihr Paket-Volumen hinausgehen",
      icon: faExclamationTriangle,
      iconColor: '#DC2626'
    },
    {
      title: "Zusatzkosten",
      value: `€${additionalCosts.toFixed(2)}`,
      subtitle: `€${costPerViewer.toFixed(2)}/Viewer`,
      isHighlight: overage > 0,
      tooltip: "Kosten für den Mehrverbrauch basierend auf dem Pay-per-Use Modell",
      icon: faExclamationTriangle,
      iconColor: '#DC2626'
    }
  ];

  const getStatusColor = () => {
    if (usagePercentage >= 100) return '#DC2626';
    if (usagePercentage >= 80) return '#F59E0B';
    return '#10B981';
  };

  const getStatusText = () => {
    if (usagePercentage >= 100) return 'Inklusiv-Volumen überschritten';
    if (usagePercentage >= 80) return 'Kurz vor Volumen-Ende';
    return 'Innerhalb des Inklusiv-Volumens';
  };

  const getStatusIcon = () => {
    if (usagePercentage >= 100) return faExclamationTriangle;
    if (usagePercentage >= 80) return faExclamationTriangle;
    return faCheckCircle;
  };

  return (
    <Card 
      elevation={0}
      sx={{ 
        backgroundColor: '#FFFFFF',
        border: '1px solid #E8EAF0',
        borderRadius: '16px',
        overflow: 'hidden'
      }}
    >
      <CardContent sx={{ p: 0 }}>
        {/* Enhanced Header with Status */}
        <Box sx={{ 
          px: 4, 
          pt: 4, 
          pb: 3,
          background: usagePercentage >= 100 
            ? 'linear-gradient(135deg, #FEF2F2 0%, #FDE8E8 100%)'
            : usagePercentage >= 80
            ? 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)'
            : 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
          borderBottom: `1px solid ${
            usagePercentage >= 100 ? '#FECACA' : 
            usagePercentage >= 80 ? '#FDE68A' : '#BBF7D0'
          }`
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 700, 
                  color: '#1A1A1A',
                  fontSize: '1.5rem',
                  letterSpacing: '-0.02em',
                  fontFamily: 'Inter, sans-serif',
                  mb: 0.5
                }}
              >
                Viewer-Verbrauch
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#64748B',
                  fontSize: '0.875rem',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Monatliche Übersicht und Kostenaufstellung
              </Typography>
            </Box>
            <Chip
              icon={<FontAwesomeIcon icon={getStatusIcon()} style={{ fontSize: '14px' }} />}
              label={getStatusText()}
              sx={{
                backgroundColor: usagePercentage >= 100 ? '#FEF2F2' : usagePercentage >= 80 ? '#FEF3C7' : '#F0FDF4',
                color: getStatusColor(),
                border: `1px solid ${usagePercentage >= 100 ? '#FECACA' : usagePercentage >= 80 ? '#FDE68A' : '#BBF7D0'}`,
                fontWeight: 600,
                fontSize: '0.75rem',
                px: 2,
                py: 1,
                height: 'auto'
              }}
            />
          </Box>
        </Box>

        {/* Enhanced Metrics Grid */}
        <Box sx={{ px: 4, py: 4 }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: 3
          }}>
            {metrics.map((metric, index) => (
              <Tooltip key={index} title={metric.tooltip} placement="top">
                <Box sx={{ 
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: metric.isHighlight ? '#FEF2F2' : '#F8FAFC',
                  border: `1px solid ${metric.isHighlight ? '#FECACA' : '#E2E8F0'}`,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: `0 8px 25px ${metric.isHighlight ? '#DC262620' : '#64748B10'}`
                  }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
                    <FontAwesomeIcon 
                      icon={metric.icon} 
                      style={{ 
                        fontSize: '16px', 
                        color: metric.iconColor
                      }} 
                    />
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#64748B',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        textTransform: 'none'
                      }}
                    >
                      {metric.title}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 800,
                      color: metric.isHighlight ? '#DC2626' : '#1A1A1A',
                      fontSize: '2.5rem',
                      lineHeight: 1,
                      mb: 1,
                      letterSpacing: '-0.03em'
                    }}
                  >
                    {metric.value}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: metric.isHighlight ? '#DC2626' : '#9CA3AF',
                      fontSize: '0.75rem',
                      fontWeight: 500
                    }}
                  >
                    {metric.subtitle}
                  </Typography>
                </Box>
              </Tooltip>
            ))}
          </Box>
        </Box>

        {/* Enhanced Usage Progress */}
        <Box sx={{ px: 4, pb: 4 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#1A1A1A', 
              mb: 3, 
              fontSize: '1rem', 
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Verbrauchsfortschritt
          </Typography>
          
          <Box sx={{ position: 'relative', mb: 3 }}>
            <LinearProgress
              variant="determinate"
              value={Math.min(usagePercentage, 100)}
              sx={{
                height: 12,
                borderRadius: 6,
                backgroundColor: '#F3F4F6',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 6,
                  background: usagePercentage >= 100 
                    ? 'linear-gradient(90deg, #DC2626 0%, #B91C1C 100%)'
                    : usagePercentage >= 80 
                    ? 'linear-gradient(90deg, #F59E0B 0%, #D97706 100%)'
                    : 'linear-gradient(90deg, #10B981 0%, #059669 100%)',
                },
              }}
            />
            {/* Limit Marker */}
            <Box sx={{
              position: 'absolute',
              top: -2,
              left: '100%',
              transform: 'translateX(-50%)',
              width: 2,
              height: 16,
              backgroundColor: '#374151',
              zIndex: 2
            }} />
            <Typography 
              variant="caption" 
              sx={{ 
                position: 'absolute',
                top: -25,
                left: '100%',
                transform: 'translateX(-50%)',
                fontSize: '0.7rem',
                color: '#374151',
                fontWeight: 600,
                whiteSpace: 'nowrap'
              }}
            >
              Inklusiv-Volumen
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="caption" sx={{ color: '#9CA3AF', fontSize: '0.75rem' }}>
              0 Viewer
            </Typography>
            <Typography variant="caption" sx={{ color: '#9CA3AF', fontSize: '0.75rem' }}>
              {packageVolume.toLocaleString()} Viewer
            </Typography>
            <Typography variant="caption" sx={{ color: '#DC2626', fontSize: '0.75rem', fontWeight: 600 }}>
              {currentUsage.toLocaleString()} Viewer (aktuell)
            </Typography>
          </Box>

          {/* Enhanced Status Alert */}
          {overage > 0 && (
            <Alert 
              severity="error" 
              icon={<FontAwesomeIcon icon={faExclamationTriangle} />}
              sx={{ 
                backgroundColor: '#FEF2F2',
                borderColor: '#FECACA',
                color: '#DC2626',
                '& .MuiAlert-icon': {
                  color: '#DC2626'
                }
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                Inklusiv-Volumen überschritten — Zusatzkosten von €{additionalCosts.toFixed(2)} fallen an
              </Typography>
              <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                Erwägen Sie ein Upgrade zu einem größeren Paket für bessere Kosteneffizienz. 
                Bei Ihrem Verbrauch könnte ein Pro-Plan langfristig günstiger sein.
              </Typography>
            </Alert>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MuiViewerConsumption;
