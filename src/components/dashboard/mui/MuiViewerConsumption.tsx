
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  LinearProgress,
  Tooltip,
  Chip,
  Alert,
  Button
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCheckCircle, faArrowUp, faCrown } from '@fortawesome/free-solid-svg-icons';

const MuiViewerConsumption = () => {
  const planDetails = {
    name: "Starter Plan",
    inclusiveViewers: 1000,
    pricePerViewer: 0.10,
    currentUsage: 2540,
    usagePercentage: 254
  };

  const packageVolume = planDetails.inclusiveViewers;
  const currentUsage = planDetails.currentUsage;
  const overage = Math.max(0, currentUsage - packageVolume);
  const costPerViewer = planDetails.pricePerViewer;
  const additionalCosts = overage * costPerViewer;
  const usagePercentage = (currentUsage / packageVolume) * 100;
  const percentageOfVolume = Math.round(usagePercentage);

  const getPlanBadgeColor = () => {
    switch (planDetails.name) {
      case "Starter Plan": return { bg: '#E3F2FD', color: '#1976D2', border: '#BBDEFB' };
      case "Pro Plan": return { bg: '#F3E5F5', color: '#7B1FA2', border: '#CE93D8' };
      case "Enterprise Plan": return { bg: '#FFF3E0', color: '#F57C00', border: '#FFCC02' };
      default: return { bg: '#F5F5F5', color: '#666', border: '#E0E0E0' };
    }
  };

  const badgeColors = getPlanBadgeColor();

  const metrics = [
    {
      title: "Current Plan",
      value: planDetails.name,
      subtitle: "subscribed package",
      tooltip: "Your currently subscribed plan",
      icon: faCrown,
      iconColor: badgeColors.color
    },
    {
      title: "Inclusive Viewers",
      value: packageVolume.toLocaleString(),
      subtitle: "included per month",
      tooltip: "The number of viewers included in your current package",
      icon: faCheckCircle,
      iconColor: '#10B981'
    },
    {
      title: "Current Usage", 
      value: currentUsage.toLocaleString(),
      subtitle: `${percentageOfVolume}% of volume`,
      tooltip: "Your current viewer usage this month",
      icon: faInfoCircle,
      iconColor: '#3890C5'
    },
    {
      title: "Additional Costs",
      value: `€${additionalCosts.toFixed(2)}`,
      subtitle: `€${costPerViewer.toFixed(2)}/viewer`,
      tooltip: "Costs for additional viewers - automatically charged via your payment method",
      icon: faInfoCircle,
      iconColor: '#3890C5'
    }
  ];

  return (
    <Card 
      elevation={0}
      sx={{ 
        backgroundColor: '#FFFFFF',
        border: '1px solid #E8EAF0',
        borderRadius: '16px',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Premium Badge */}
      <Box sx={{
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 1
      }}>
        <Chip
          icon={<FontAwesomeIcon icon={faCrown} style={{ fontSize: '12px' }} />}
          label={planDetails.name}
          sx={{
            backgroundColor: badgeColors.bg,
            color: badgeColors.color,
            border: `1px solid ${badgeColors.border}`,
            fontWeight: 600,
            fontSize: '0.75rem',
            height: '28px'
          }}
        />
      </Box>

      <CardContent sx={{ p: 0 }}>
        {/* Header */}
        <Box sx={{ 
          px: 4, 
          pt: 4, 
          pb: 3,
          background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
          borderBottom: '1px solid #E2E8F0'
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
                Plan & Viewer Consumption
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#64748B',
                  fontSize: '0.875rem',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Overview of your plan and monthly consumption
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Metrics Grid */}
        <Box sx={{ px: 4, py: 4 }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: 3,
            mb: 4
          }}>
            {metrics.map((metric, index) => (
              <Tooltip key={index} title={metric.tooltip} placement="top">
                <Box sx={{ 
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 25px #64748B10'
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
                      color: '#1A1A1A',
                      fontSize: index === 0 ? '1.5rem' : '2.5rem',
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
                      color: '#9CA3AF',
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

          {/* Usage Progress */}
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
            Usage Progress
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
                  background: 'linear-gradient(90deg, #3890C5 0%, #43BEAC 100%)',
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
              Inclusive Maximum
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="caption" sx={{ color: '#9CA3AF', fontSize: '0.75rem' }}>
              0 Viewers
            </Typography>
            <Typography variant="caption" sx={{ color: '#9CA3AF', fontSize: '0.75rem' }}>
              {packageVolume.toLocaleString()} Viewers
            </Typography>
            <Typography variant="caption" sx={{ color: '#3890C5', fontSize: '0.75rem', fontWeight: 600 }}>
              {currentUsage.toLocaleString()} Viewers (current)
            </Typography>
          </Box>

          {/* Information Alert & Action Button */}
          {overage > 0 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Alert 
                severity="info" 
                icon={<FontAwesomeIcon icon={faInfoCircle} />}
                sx={{ 
                  backgroundColor: '#F0F9FF',
                  borderColor: '#BAE6FD',
                  color: '#0369A1',
                  '& .MuiAlert-icon': {
                    color: '#0369A1'
                  }
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                  Additional viewer costs of €{additionalCosts.toFixed(2)}
                </Typography>
                <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                  The costs for additional viewers are automatically charged via your 
                  stored payment method. An upgrade to a larger plan might be more 
                  cost-effective for your usage level.
                </Typography>
              </Alert>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  startIcon={<FontAwesomeIcon icon={faArrowUp} />}
                  sx={{
                    backgroundColor: '#43BEAC',
                    color: 'white',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '0.875rem',
                    boxShadow: '0 2px 4px rgba(67, 190, 172, 0.2)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#30A390',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 4px 8px rgba(67, 190, 172, 0.3)'
                    }
                  }}
                >
                  Upgrade Plan
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MuiViewerConsumption;
