const StatisticsLine = ({ text, value }) => {
  return !(text === 'positive') ? (
    <p>
      {text} {value}
    </p>
  ) : (
    <p>
      {text} {value}%
    </p>
  );
};
export default StatisticsLine;
