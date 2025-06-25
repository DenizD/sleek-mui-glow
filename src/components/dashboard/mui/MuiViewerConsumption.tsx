
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Alert, 
  Button,
  LinearProgress,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExclamationTriangle, 
  faDownload, 
  faEuroSign
} from '@fortawesome/free-solid-svg-icons';

const MuiViewerConsumption = () => {
  const packageLimit = 1000; // Inklusivvolumen
  const currentUsage = 2540; // Aktuell genutzte Viewer
  const overage = Math.max(0, currentUsage - packageLimit); // Überverbrauch
  const costPerExtraViewer = 0.10; // 10 Cent pro zusätzlichem Viewer
  const additionalCosts = overage * costPerExtraViewer;
  const usagePercentage = Math.min((currentUsage / packageLimit) * 100, 100);

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
            Viewer-Verbrauch
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              size="small"
              variant="outlined"
              onClick={handleExportPDF}
              startIcon={<FontAwesomeIcon icon={faDownload} />}
              sx={{ textTransform: 'none', fontSize: '0.75rem' }}
            >
              PDF
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={handleExportCSV}
              sx={{ textTransform: 'none', fontSize: '0.75rem' }}
            >
              CSV
            </Button>
          </Box>
        </Box>

        {/* Kompakte Verbrauchsübersicht */}
        <Box sx={{ mb: 3 }}>
          <Table size="small" sx={{ '& .MuiTableCell-root': { border: 'none', py: 1, px: 0 } }}>
            <TableBody>
              <TableRow>
                <TableCell sx={{ fontWeight: 500, color: '#25242E', width: '40%' }}>
                  Inklusivvolumen:
                </TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#25242E' }}>
                  {packageLimit.toLocaleString()} Viewer
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 500, color: '#25242E' }}>
                  Aktueller Verbrauch:
                </TableCell>
                <TableCell sx={{ fontWeight: 600, color: '#3890C5' }}>
                  {currentUsage.toLocaleString()} Viewer
                </TableCell>
              </TableRow>
              {overage > 0 && (
                <TableRow>
                  <TableCell sx={{ fontWeight: 500, color: '#25242E' }}>
                    Über Limit:
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#FF8E03' }}>
                    {overage.toLocaleString()} Viewer
                  </TableCell>
                </TableRow>
              )}
              {additionalCosts > 0 && (
                <TableRow>
                  <TableCell sx={{ fontWeight: 500, color: '#25242E' }}>
                    Zusatzkosten:
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#D32F2F', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FontAwesomeIcon icon={faEuroSign} size="sm" />
                    {additionalCosts.toFixed(2)} €
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Box>

        {/* Fortschrittsbalken mit zwei Zonen */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" sx={{ color: '#747474', fontSize: '0.75rem' }}>
              Verbrauchsvisualisierung
            </Typography>
            <Typography variant="body2" sx={{ color: '#747474', fontSize: '0.75rem' }}>
              {usagePercentage.toFixed(0)}%
            </Typography>
          </Box>
          
          <Box sx={{ position: 'relative' }}>
            {/* Basis-Fortschrittsbalken (Inklusivvolumen) */}
            <LinearProgress
              variant="determinate"
              value={Math.min(usagePercentage, 100)}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: '#E0E0E0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#43BEAC',
                  borderRadius: 4,
                },
              }}
            />
            {/* Überverbrauch-Balken */}
            {overage > 0 && (
              <LinearProgress
                variant="determinate"
                value={Math.min((overage / packageLimit) * 100, 100)}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: 'transparent',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#D32F2F',
                    borderRadius: 4,
                    marginLeft: '100%',
                  },
                }}
              />
            )}
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
            <Typography variant="caption" sx={{ color: '#747474', fontSize: '0.7rem' }}>
              Inklusivvolumen (grün)
            </Typography>
            <Typography variant="caption" sx={{ color: '#747474', fontSize: '0.7rem' }}>
              Überverbrauch (rot)
            </Typography>
          </Box>
        </Box>

        {/* Kompakte Statusmeldung nur bei Bedarf */}
        {overage > 0 && (
          <Alert 
            severity="warning" 
            icon={<FontAwesomeIcon icon={faExclamationTriangle} />}
            sx={{ 
              borderRadius: 2,
              mb: 2,
              py: 1,
              '& .MuiAlert-message': {
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.8rem'
              }
            }}
          >
            Limit überschritten: {additionalCosts.toFixed(2)} € Zusatzkosten
          </Alert>
        )}

        {currentUsage >= packageLimit * 0.9 && currentUsage < packageLimit && (
          <Alert 
            severity="info"
            sx={{ 
              borderRadius: 2,
              py: 1,
              '& .MuiAlert-message': {
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.8rem'
              }
            }}
          >
            {usagePercentage.toFixed(0)}% des Volumens verbraucht
          </Alert>
        )}

        <Divider sx={{ my: 2 }} />

        {/* Kompakte Kostenaufschlüsselung */}
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#25242E', mb: 1, fontSize: '0.875rem' }}>
            Kostenübersicht:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="body2" sx={{ color: '#747474', fontSize: '0.8rem' }}>
              Paketpreis (inkl. {packageLimit.toLocaleString()} Viewer)
            </Typography>
            <Typography variant="body2" sx={{ color: '#25242E', fontSize: '0.8rem' }}>
              Im Abo enthalten
            </Typography>
          </Box>
          {overage > 0 && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography variant="body2" sx={{ color: '#747474', fontSize: '0.8rem' }}>
                Zusätzlich ({overage.toLocaleString()} × {costPerExtraViewer.toFixed(2)} €)
              </Typography>
              <Typography variant="body2" sx={{ color: '#D32F2F', fontWeight: 600, fontSize: '0.8rem' }}>
                {additionalCosts.toFixed(2)} €
              </Typography>
            </Box>
          )}
          <Divider sx={{ my: 1 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body1" sx={{ fontWeight: 600, color: '#25242E', fontSize: '0.9rem' }}>
              Zusatzkosten gesamt:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600, color: additionalCosts > 0 ? '#D32F2F' : '#43BEAC', fontSize: '0.9rem' }}>
              {additionalCosts.toFixed(2)} €
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MuiViewerConsumption;
