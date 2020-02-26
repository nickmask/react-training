import React from 'react';
import { Flex, Box } from 'reflexbox';

const Contestants = ({ name, onVote, index }) => {
  return (
    <Flex m={2}>
      <Box pr={2}>{name}</Box>
      <Box>
        <button onClick={() => onVote(index)}>Vote</button>
      </Box>
    </Flex>
  );
};

export default Contestants;
