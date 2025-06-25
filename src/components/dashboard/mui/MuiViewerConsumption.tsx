
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  LinearProgress,
  Chip
} from '@mui/material';

const MuiViewerConsumption = () => {
  const packageLimit = 1000;
  const currentUsage = 2540;
  const overage = Math.max(0, currentUsage - packageLimit);
  const costPerViewer = 0.10;
  const additionalCosts = overage * costPerViewer;
  const usagePercentage = Math.min((currentUsage / packageLimit) * 100, 100);

  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
          Viewer-Verbrauch
        </Typography>

        {/* Hauptmetriken */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3 }}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Inklusiv
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {packageLimit.toLocaleString()}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Verbraucht
            </Typography>
            <Typography variant="h5" fontWeight="bold" color="primary">
              {currentUsage.toLocaleString()}
            </Typography>
          </Box>
        </Box>

        {/* Fortschrittsbalken */}
        <Box sx={{ mb: 3 }}>
          <LinearProgress
            variant="determinate"
            value={Math.min(usagePercentage, 100)}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: '#E0E0E0',
              '& .MuiLinearProgress-bar': {
                backgroundColor: overage > 0 ? '#D32F2F' : '#43BEAC',
                borderRadius: 4,
              },
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography variant="caption" color="text.secondary">
              0
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {packageLimit.toLocaleString()}
            </Typography>
          </Box>
        </Box>

        {/* Überverbrauch */}
        {overage > 0 && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            p: 2,
            backgroundColor: '#FFF3E0',
            borderRadius: 2,
            border: '1px solid #FFB74D'
          }}>
            <Box>
              <Typography variant="body2" fontWeight="500">
                Überverbrauch: {overage.toLocaleString()} Viewer
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {costPerViewer.toFixed(2)} €/Viewer
              </Typography>
            </Box>
            <Chip 
              label={`${additionalCosts.toFixed(2)} €`}
              color="warning"
              sx={{ fontWeight: 'bold' }}
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default MuiViewerConsumption;
