import React from 'react';
import { Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        About
      </Typography>
      <Typography variant="body1">This is the About page.</Typography>
    </div>
  );
};

export default About;
