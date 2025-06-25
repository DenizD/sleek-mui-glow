
import React from 'react';
import { Box, FormControlLabel, Switch, Typography } from '@mui/material';

interface ScenarioSwitcherProps {
  isExceededScenario: boolean;
  onToggle: (checked: boolean) => void;
}

const ScenarioSwitcher: React.FC<ScenarioSwitcherProps> = ({ isExceededScenario, onToggle }) => {
  return (
    <Box sx={{
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 2
    }}>
      <FormControlLabel
        control={
          <Switch
            checked={isExceededScenario}
            onChange={(e) => onToggle(e.target.checked)}
            size="small"
          />
        }
        label={
          <Typography 
            variant="caption" 
            sx={{ 
              fontSize: '0.8rem', 
              color: '#64748B',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500
            }}
          >
            {isExceededScenario ? 'Exceeded Scenario' : 'Within Limits'}
          </Typography>
        }
      />
    </Box>
  );
};

export default ScenarioSwitcher;
