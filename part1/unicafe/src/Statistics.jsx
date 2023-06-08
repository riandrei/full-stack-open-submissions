const Statistics = ({ good, neutral, bad, all }) => {
  return (
    <>
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

export default Statistics;
