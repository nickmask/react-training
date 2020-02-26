import React, { useState } from 'react';
import { Flex } from 'reflexbox';

import Votes from './Votes';
import Contestants from './Contestants';

const users = [
  { name: 'Nick', votes: 0 },
  { name: 'Sam', votes: 0 },
  { name: 'Jane', votes: 0 },
  { name: 'April', votes: 0 }
];

const App = () => {
  const [voteTotals, setVoteTotals] = useState({ ...users });

  const onVote = index => {
    setVoteTotals(prevProps => ({
      ...prevProps,
      [index]: {
        votes: prevProps[index].votes + 1
      }
    }));
  };

  return (
    <div>
      <h1>Vote for your favourite Hackathon idea!</h1>
      <h2>Totals:</h2>
      <Flex>
        {users.map((user, index) => (
          <Votes name={user.name} votes={voteTotals[index].votes} />
        ))}
      </Flex>
      <h2>Vote:</h2>
      {users.map((user, index) => (
        <Contestants name={user.name} onVote={onVote} index={index} />
      ))}
    </div>
  );
};

export default App;
