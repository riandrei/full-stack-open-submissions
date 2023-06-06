import { useState } from 'react';

import Button from './Button';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  return (
    <>
      <h1>give feedback</h1>
      <Button type="good" handleClick={handleGoodClick} />
      <Button type="neutral" handleClick={handleNeutralClick} />
      <Button type="bad" handleClick={handleBadClick} />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {(good - bad) / all || 0}</p>
      <p>positive {(good / all) * 100 || 0} %</p>
    </>
  );
};

export default App;
