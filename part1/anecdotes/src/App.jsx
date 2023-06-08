import { useState } from 'react';

import Anecdote from './Anecdote';
import Button from './Button';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selectedAnecdote, setselectedAnecdote] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const mostAnecdoteVotes = votes.indexOf(Math.max(...votes));

  const changeAnecdote = () => {
    const randomAnecdoteIndex = Math.floor(Math.random() * anecdotes.length);

    setselectedAnecdote(randomAnecdoteIndex);
  };

  const voteAnecdote = (selectedAnecdote) => {
    const tempVotes = [...votes];
    tempVotes[selectedAnecdote] += 1;

    setVotes(tempVotes);
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={anecdotes} anecdoteIndex={selectedAnecdote} />
      <p>has {votes[selectedAnecdote]} votes</p>
      <Button handleClick={() => voteAnecdote(selectedAnecdote)} text="vote" />
      <Button handleClick={changeAnecdote} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdotes={anecdotes} anecdoteIndex={mostAnecdoteVotes} />
    </>
  );
};

export default App;
