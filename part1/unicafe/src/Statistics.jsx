import StatisticsLine from './StatisticsLine';

const Statistics = ({ good, neutral, bad, all }) => {
  return !(good || neutral || bad) ? (
    <p>No feedback given</p>
  ) : (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={all} />
        <StatisticsLine text="average" value={(good - bad) / all} />
        <StatisticsLine text="positive" value={(good / all) * 100} />
      </tbody>
    </table>
  );
};

export default Statistics;
