
import React from 'react';
import { Card, CardContent, Typography, Box, Button, Alert } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowUp, 
  faFileInvoice, 
  faChartLine, 
  faInfoCircle,
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';

const MuiSelfServiceActions = () => {
  const actions = [
    {
      title: "Plan upgraden",
      description: "Wechseln Sie zu einem höheren Plan für bessere Kosteneffizienz",
      icon: faArrowUp,
      color: '#43BEAC',
      bgColor: '#F0FDF4',
      borderColor: '#BBF7D0',
      primary: true
    },
    {
      title: "Rechnung einsehen",
      description: "Alle Abrechnungen und Kostenzusammenstellungen",
      icon: faFileInvoice,
      color: '#3890C5',
      bgColor: '#F0F9FF',
      borderColor: '#BAE6FD',
      primary: false
    },
    {
      title: "Verbrauchsdetails",
      description: "Detaillierte Aufschlüsselung nach Content-Typ",
      icon: faChartLine,
      color: '#64748B',
      bgColor: '#F8FAFC',
      borderColor: '#E2E8F0',
      primary: false
    }
  ];

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
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              color: '#1A1A1A',
              fontSize: '1.125rem',
              fontFamily: 'Inter, sans-serif',
              mb: 1
            }}
          >
            Schnelle Aktionen
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#64748B',
              fontSize: '0.875rem',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Verwalten Sie Ihren Tarif und Verbrauch eigenständig
          </Typography>
        </Box>

        {/* Information Alert */}
        <Alert 
          severity="info" 
          icon={<FontAwesomeIcon icon={faInfoCircle} />}
          sx={{ 
            mb: 3,
            backgroundColor: '#F0F9FF',
            borderColor: '#BAE6FD',
            color: '#0369A1',
            '& .MuiAlert-icon': {
              color: '#0369A1'
            }
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
            Automatische Abrechnung
          </Typography>
          <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
            Zusätzliche Viewer-Kosten werden automatisch über Ihre hinterlegte 
            Zahlungsmethode abgerechnet. Bei Ihrem aktuellen Verbrauch könnte 
            ein Upgrade langfristig kostengünstiger sein.
          </Typography>
        </Alert>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.primary ? "contained" : "outlined"}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 3,
                borderRadius: 3,
                textAlign: 'left',
                textTransform: 'none',
                backgroundColor: action.primary ? action.color : action.bgColor,
                borderColor: action.primary ? 'transparent' : action.borderColor,
                color: action.primary ? 'white' : action.color,
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: action.primary 
                    ? `${action.color}dd` 
                    : action.bgColor,
                  borderColor: action.primary ? 'transparent' : action.color,
                  transform: 'translateY(-2px)',
                  boxShadow: action.primary 
                    ? `0 4px 12px ${action.color}40`
                    : `0 4px 12px ${action.color}20`
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                <Box sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  backgroundColor: action.primary ? 'rgba(255,255,255,0.2)' : action.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: action.primary ? 'none' : `1px solid ${action.borderColor}`
                }}>
                  <FontAwesomeIcon 
                    icon={action.icon} 
                    style={{ 
                      fontSize: '16px',
                      color: action.primary ? 'white' : action.color
                    }} 
                  />
                </Box>
                <Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      mb: 0.5,
                      color: action.primary ? 'white' : action.color
                    }}
                  >
                    {action.title}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontSize: '0.75rem',
                      color: action.primary ? 'rgba(255,255,255,0.8)' : '#64748B',
                      lineHeight: 1.3
                    }}
                  >
                    {action.description}
                  </Typography>
                </Box>
              </Box>
              <FontAwesomeIcon 
                icon={faArrowRight} 
                style={{ 
                  fontSize: '14px',
                  color: action.primary ? 'white' : action.color,
                  opacity: 0.7
                }} 
              />
            </Button>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MuiSelfServiceActions;
