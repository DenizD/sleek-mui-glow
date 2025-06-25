import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Alert, 
  Button,
  LinearProgress,
  Chip,
  Divider
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExclamationTriangle, 
  faDownload, 
  faEye,
  faBox,
  faEuroSign
} from '@fortawesome/free-solid-svg-icons';

const MuiViewerConsumption = () => {
  const packageLimit = 1000; // Inklusivvolumen
  const currentUsage = 2540; // Aktuell genutzte Viewer
  const overage = Math.max(0, currentUsage - packageLimit); // Überverbrauch
  const costPerExtraViewer = 0.10; // 10 Cent pro zusätzlichem Viewer
  const additionalCosts = overage * costPerExtraViewer;
  const usagePercentage = Math.min((currentUsage / packageLimit) * 100, 100);
  const overagePercentage = Math.max(0, ((currentUsage - packageLimit) / packageLimit) * 100);

  const handleExportPDF = () => {
    console.log('Export als PDF');
    // Implementierung folgt
  };

  const handleExportCSV = () => {
    console.log('Export als CSV');
    // Implementierung folgt
  };

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              color: '#25242E',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Viewer-Verbrauch Details
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              size="small"
              variant="outlined"
              onClick={handleExportPDF}
              startIcon={<FontAwesomeIcon icon={faDownload} />}
              sx={{ textTransform: 'none' }}
            >
              PDF
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={handleExportCSV}
              sx={{ textTransform: 'none' }}
            >
              CSV
            </Button>
          </Box>
        </Box>

        {/* Paketinformationen */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <FontAwesomeIcon icon={faBox} style={{ color: '#43BEAC' }} />
            <Typography variant="body1" sx={{ fontWeight: 600, color: '#25242E' }}>
              Ihr Paket: {packageLimit.toLocaleString()} Viewer inklusive
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <FontAwesomeIcon icon={faEye} style={{ color: '#3890C5' }} />
            <Typography variant="body1" sx={{ color: '#25242E' }}>
              Aktuell genutzt: <strong>{currentUsage.toLocaleString()} Viewer</strong>
            </Typography>
          </Box>
          
          {overage > 0 && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
              <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: '#FF8E03' }} />
              <Typography variant="body1" sx={{ color: '#FF8E03', fontWeight: 600 }}>
                Über das Limit: {overage.toLocaleString()} Viewer
              </Typography>
            </Box>
          )}
          
          {additionalCosts > 0 && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <FontAwesomeIcon icon={faEuroSign} style={{ color: '#D32F2F' }} />
              <Typography variant="body1" sx={{ color: '#D32F2F', fontWeight: 600 }}>
                Zusätzliche Kosten: {additionalCosts.toFixed(2)} €
              </Typography>
            </Box>
          )}
        </Box>

        {/* Fortschrittsbalken */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" sx={{ color: '#747474' }}>
              Verbrauch Visualisierung
            </Typography>
            <Typography variant="body2" sx={{ color: '#747474' }}>
              {usagePercentage.toFixed(1)}% des Inklusivvolumens
            </Typography>
          </Box>
          
          <Box sx={{ position: 'relative' }}>
            <LinearProgress
              variant="determinate"
              value={Math.min(usagePercentage, 100)}
              sx={{
                height: 12,
                borderRadius: 6,
                backgroundColor: '#E0E0E0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: usagePercentage <= 100 ? '#43BEAC' : '#FF8E03',
                  borderRadius: 6,
                },
              }}
            />
            {overagePercentage > 0 && (
              <LinearProgress
                variant="determinate"
                value={Math.min(overagePercentage, 100)}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: 'transparent',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#D32F2F',
                    borderRadius: 6,
                    marginLeft: '100%',
                  },
                }}
              />
            )}
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography variant="caption" sx={{ color: '#747474' }}>
              0 Viewer
            </Typography>
            <Typography variant="caption" sx={{ color: '#747474' }}>
              {packageLimit.toLocaleString()} Viewer (Limit)
            </Typography>
            <Typography variant="caption" sx={{ color: '#D32F2F' }}>
              {currentUsage.toLocaleString()} Viewer
            </Typography>
          </Box>
        </Box>

        {/* Status Chips */}
        <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
          <Chip
            label={`${packageLimit.toLocaleString()} inklusive`}
            color="primary"
            size="small"
            sx={{ fontFamily: 'Inter, sans-serif' }}
          />
          <Chip
            label={`${currentUsage.toLocaleString()} genutzt`}
            color="info"
            size="small"
            sx={{ fontFamily: 'Inter, sans-serif' }}
          />
          {overage > 0 && (
            <Chip
              label={`${overage.toLocaleString()} Überverbrauch`}
              color="warning"
              size="small"
              sx={{ fontFamily: 'Inter, sans-serif' }}
            />
          )}
        </Box>

        {/* Warnhinweise */}
        {overage > 0 && (
          <Alert 
            severity="warning" 
            icon={<FontAwesomeIcon icon={faExclamationTriangle} />}
            sx={{ 
              borderRadius: 2,
              mb: 2,
              '& .MuiAlert-message': {
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem'
              }
            }}
          >
            Sie haben Ihr Paketvolumen um {overage.toLocaleString()} Viewer überschritten. 
            Zusätzliche Kosten von {additionalCosts.toFixed(2)} € entstehen.
          </Alert>
        )}

        {currentUsage >= packageLimit * 0.8 && currentUsage < packageLimit && (
          <Alert 
            severity="info"
            sx={{ 
              borderRadius: 2,
              '& .MuiAlert-message': {
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem'
              }
            }}
          >
            Sie haben bereits {usagePercentage.toFixed(1)}% Ihres Paketvolumens verbraucht. 
            Noch {(packageLimit - currentUsage).toLocaleString()} Viewer verfügbar.
          </Alert>
        )}

        <Divider sx={{ my: 2 }} />

        {/* Kostenaufschlüsselung */}
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#25242E', mb: 1 }}>
            Kostenaufschlüsselung:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="body2" sx={{ color: '#747474' }}>
              Paketpreis (inkl. {packageLimit.toLocaleString()} Viewer)
            </Typography>
            <Typography variant="body2" sx={{ color: '#25242E' }}>
              Im Abo enthalten
            </Typography>
          </Box>
          {overage > 0 && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography variant="body2" sx={{ color: '#747474' }}>
                Zusätzliche Viewer ({overage.toLocaleString()} × {costPerExtraViewer.toFixed(2)} €)
              </Typography>
              <Typography variant="body2" sx={{ color: '#D32F2F', fontWeight: 600 }}>
                {additionalCosts.toFixed(2)} €
              </Typography>
            </Box>
          )}
          <Divider sx={{ my: 1 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1" sx={{ fontWeight: 600, color: '#25242E' }}>
              Zusätzliche Kosten gesamt:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600, color: additionalCosts > 0 ? '#D32F2F' : '#43BEAC' }}>
              {additionalCosts.toFixed(2)} €
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MuiViewerConsumption;
