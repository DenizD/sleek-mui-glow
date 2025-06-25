
import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Button, Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpgrade, faInfoCircle, faCrown } from '@fortawesome/free-solid-svg-icons';

const MuiPlanOverview = () => {
  const planDetails = {
    name: "Starter Plan",
    inclusiveViewers: 1000,
    pricePerViewer: 0.10,
    currentUsage: 2540,
    usagePercentage: 254
  };

  const getPlanBadgeColor = () => {
    switch (planDetails.name) {
      case "Starter Plan": return { bg: '#E3F2FD', color: '#1976D2', border: '#BBDEFB' };
      case "Pro Plan": return { bg: '#F3E5F5', color: '#7B1FA2', border: '#CE93D8' };
      case "Enterprise Plan": return { bg: '#FFF3E0', color: '#F57C00', border: '#FFCC02' };
      default: return { bg: '#F5F5F5', color: '#666', border: '#E0E0E0' };
    }
  };

  const badgeColors = getPlanBadgeColor();

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

      <CardContent sx={{ p: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 700, 
              color: '#1A1A1A',
              fontSize: '1.5rem',
              letterSpacing: '-0.02em',
              fontFamily: 'Inter, sans-serif',
              mb: 1
            }}
          >
            Ihr aktueller Tarif
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#64748B',
              fontSize: '0.875rem',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Übersicht über Ihr gebuchtes Paket und die inkludierten Leistungen
          </Typography>
        </Box>

        {/* Plan Details Grid */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: 3,
          mb: 4
        }}>
          <Tooltip title="Die Anzahl der Viewer, die in Ihrem Plan inbegriffen sind" placement="top">
            <Box sx={{ 
              textAlign: 'center',
              p: 2,
              borderRadius: 2,
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: '#F1F5F9',
                transform: 'translateY(-2px)'
              }
            }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#64748B',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  mb: 1,
                  display: 'block'
                }}
              >
                Inklusiv-Viewer
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  color: '#1A1A1A',
                  fontSize: '1.75rem',
                  lineHeight: 1,
                  mb: 0.5
                }}
              >
                {planDetails.inclusiveViewers.toLocaleString()}
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#64748B',
                  fontSize: '0.75rem'
                }}
              >
                pro Monat
              </Typography>
            </Box>
          </Tooltip>

          <Tooltip title="Kosten für jeden Viewer über das Inklusiv-Volumen hinaus" placement="top">
            <Box sx={{ 
              textAlign: 'center',
              p: 2,
              borderRadius: 2,
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: '#F1F5F9',
                transform: 'translateY(-2px)'
              }
            }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#64748B',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  mb: 1,
                  display: 'block'
                }}
              >
                Preis pro Zusatz-Viewer
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  color: '#1A1A1A',
                  fontSize: '1.75rem',
                  lineHeight: 1,
                  mb: 0.5
                }}
              >
                €{planDetails.pricePerViewer.toFixed(2)}
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#64748B',
                  fontSize: '0.75rem'
                }}
              >
                pro Viewer
              </Typography>
            </Box>
          </Tooltip>

          <Tooltip title="Ihr aktueller Verbrauch in Prozent des Inklusiv-Volumens" placement="top">
            <Box sx={{ 
              textAlign: 'center',
              p: 2,
              borderRadius: 2,
              backgroundColor: planDetails.usagePercentage > 100 ? '#FEF2F2' : '#F8FAFC',
              border: `1px solid ${planDetails.usagePercentage > 100 ? '#FECACA' : '#E2E8F0'}`,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: planDetails.usagePercentage > 100 ? '#FEE2E2' : '#F1F5F9',
                transform: 'translateY(-2px)'
              }
            }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#64748B',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  mb: 1,
                  display: 'block'
                }}
              >
                Aktueller Verbrauch
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  color: planDetails.usagePercentage > 100 ? '#DC2626' : '#1A1A1A',
                  fontSize: '1.75rem',
                  lineHeight: 1,
                  mb: 0.5
                }}
              >
                {planDetails.usagePercentage}%
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: planDetails.usagePercentage > 100 ? '#DC2626' : '#64748B',
                  fontSize: '0.75rem',
                  fontWeight: planDetails.usagePercentage > 100 ? 600 : 400
                }}
              >
                des Volumens
              </Typography>
            </Box>
          </Tooltip>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          justifyContent: 'center',
          pt: 2,
          borderTop: '1px solid #F3F4F6'
        }}>
          <Button
            variant="contained"
            startIcon={<FontAwesomeIcon icon={faUpgrade} />}
            sx={{
              backgroundColor: '#43BEAC',
              color: 'white',
              fontWeight: 600,
              px: 3,
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
            Plan upgraden
          </Button>
          <Button
            variant="outlined"
            startIcon={<FontAwesomeIcon icon={faInfoCircle} />}
            sx={{
              borderColor: '#E2E8F0',
              color: '#64748B',
              fontWeight: 500,
              px: 3,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '0.875rem',
              transition: 'all 0.2s ease',
              '&:hover': {
                borderColor: '#CBD5E0',
                backgroundColor: '#F8FAFC',
                transform: 'translateY(-1px)'
              }
            }}
          >
            Mehr erfahren
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MuiPlanOverview;
