const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      {text === 'positive' ? <td>{value} %</td> : <td>{value}</td>}
    </tr>
  );
};
export default StatisticsLine;
