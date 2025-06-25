
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  LinearProgress,
  Tooltip,
  Chip,
  Alert,
  Button,
  Switch,
  FormControlLabel
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCheckCircle, faExclamationTriangle, faCrown } from '@fortawesome/free-solid-svg-icons';

const MuiViewerConsumption = () => {
  const [isExceededScenario, setIsExceededScenario] = useState(false);

  // Scenario data
  const scenarioData = {
    withinLimits: {
      currentUsage: 750,
      usagePercentage: 75,
      alertType: 'success' as const,
      alertIcon: faCheckCircle,
      alertTitle: 'Within inclusive volume: 250 viewers remaining',
      alertDescription: 'You are currently using 750 of your 1,000 inclusive viewers. No additional charges apply.',
      alertColors: {
        backgroundColor: '#F0FDF4',
        borderColor: '#BBF7D0',
        color: '#166534',
        iconColor: '#10B981'
      }
    },
    exceeded: {
      currentUsage: 1250,
      usagePercentage: 125,
      alertType: 'warning' as const,
      alertIcon: faExclamationTriangle,
      alertTitle: 'Inclusive volume exceeded: Usage-based pricing active',
      alertDescription: 'You have used 1,250 viewers this month. 250 additional viewers beyond your inclusive volume will be charged at €0.10 per viewer.',
      alertColors: {
        backgroundColor: '#FFFBEB',
        borderColor: '#FED7AA',
        color: '#92400E',
        iconColor: '#F59E0B'
      }
    }
  };

  const currentScenario = isExceededScenario ? scenarioData.exceeded : scenarioData.withinLimits;

  const planDetails = {
    name: "Starter Plan",
    inclusiveViewers: 1000,
    pricePerViewer: 0.10,
    currentUsage: currentScenario.currentUsage,
    usagePercentage: currentScenario.usagePercentage
  };

  const packageVolume = planDetails.inclusiveViewers;
  const currentUsage = planDetails.currentUsage;
  const overage = Math.max(0, currentUsage - packageVolume);
  const costPerViewer = planDetails.pricePerViewer;
  const additionalCosts = overage * costPerViewer;
  
  // Calculate remaining inclusive viewers or overage
  const remainingInclusive = Math.max(0, packageVolume - currentUsage);
  const usedInclusive = Math.min(currentUsage, packageVolume);
  const inclusiveUsagePercentage = Math.min((usedInclusive / packageVolume) * 100, 100);

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
      subtitle: overage > 0 ? `+${overage.toLocaleString()} additional` : `${remainingInclusive.toLocaleString()} remaining`,
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
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '600px'
      }}
    >
      {/* Scenario Switcher */}
      <Box sx={{
        position: 'absolute',
        top: 16,
        left: 16,
        zIndex: 2
      }}>
        <FormControlLabel
          control={
            <Switch
              checked={isExceededScenario}
              onChange={(e) => setIsExceededScenario(e.target.checked)}
              size="small"
            />
          }
          label={
            <Typography variant="caption" sx={{ fontSize: '0.75rem', color: '#64748B' }}>
              {isExceededScenario ? 'Exceeded Scenario' : 'Within Limits'}
            </Typography>
          }
        />
      </Box>

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
            height: '32px'
          }}
        />
      </Box>

      <CardContent sx={{ p: 0 }}>
        {/* Header */}
        <Box sx={{ 
          px: 5, 
          pt: 5, 
          pb: 4,
          background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
          borderBottom: '1px solid #E2E8F0'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700, 
                  color: '#1A1A1A',
                  fontSize: '2rem',
                  letterSpacing: '-0.02em',
                  fontFamily: 'Inter, sans-serif',
                  mb: 1
                }}
              >
                Plan & Viewer Consumption
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#64748B',
                  fontSize: '1rem',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Overview of your plan and monthly consumption
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Metrics Grid */}
        <Box sx={{ px: 5, py: 5 }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: 4,
            mb: 5
          }}>
            {metrics.map((metric, index) => (
              <Tooltip key={index} title={metric.tooltip} placement="top">
                <Box sx={{ 
                  textAlign: 'center',
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 30px #64748B15'
                  }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
                    <FontAwesomeIcon 
                      icon={metric.icon} 
                      style={{ 
                        fontSize: '18px', 
                        color: metric.iconColor
                      }} 
                    />
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#64748B',
                        fontSize: '1rem',
                        fontWeight: 600,
                        textTransform: 'none'
                      }}
                    >
                      {metric.title}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontWeight: 800,
                      color: '#1A1A1A',
                      fontSize: index === 0 ? '1.75rem' : '3rem',
                      lineHeight: 1,
                      mb: 1.5,
                      letterSpacing: '-0.03em'
                    }}
                  >
                    {metric.value}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#9CA3AF',
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}
                  >
                    {metric.subtitle}
                  </Typography>
                </Box>
              </Tooltip>
            ))}
          </Box>

          {/* Inclusive Volume Progress */}
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#1A1A1A', 
              mb: 4, 
              fontSize: '1.25rem', 
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Inclusive Volume Usage
          </Typography>
          
          <Box sx={{ position: 'relative', mb: 4 }}>
            <LinearProgress
              variant="determinate"
              value={inclusiveUsagePercentage}
              sx={{
                height: 16,
                borderRadius: 8,
                backgroundColor: '#F3F4F6',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 8,
                  background: inclusiveUsagePercentage >= 100 
                    ? 'linear-gradient(90deg, #F59E0B 0%, #D97706 100%)'
                    : 'linear-gradient(90deg, #3890C5 0%, #43BEAC 100%)',
                },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.75rem',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              {Math.round(inclusiveUsagePercentage)}%
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
            <Typography variant="body2" sx={{ color: '#9CA3AF', fontSize: '0.875rem' }}>
              0 Viewers
            </Typography>
            <Typography variant="body2" sx={{ color: '#9CA3AF', fontSize: '0.875rem' }}>
              {packageVolume.toLocaleString()} Viewers (Inclusive Max)
            </Typography>
          </Box>

          {/* Status Information */}
          <Alert 
            severity={currentScenario.alertType}
            icon={<FontAwesomeIcon icon={currentScenario.alertIcon} />}
            sx={{ 
              backgroundColor: currentScenario.alertColors.backgroundColor,
              borderColor: currentScenario.alertColors.borderColor,
              color: currentScenario.alertColors.color,
              padding: '16px 20px',
              borderRadius: '12px',
              '& .MuiAlert-icon': {
                color: currentScenario.alertColors.iconColor
              }
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 600, mb: 1, fontSize: '1rem' }}>
              {currentScenario.alertTitle}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
              {currentScenario.alertDescription}
            </Typography>
          </Alert>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MuiViewerConsumption;
