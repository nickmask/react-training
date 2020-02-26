import React from 'react';
import { Box } from 'reflexbox';

const Votes = ({ name, votes }) => {
  return (
    <Box p={2}>
      {name}: {votes}
    </Box>
  );
};

export default Votes;
