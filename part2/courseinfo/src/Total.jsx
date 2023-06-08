const Total = ({ parts }) => {
  // adding this so I can make a commit without changes
  return <h4>total of {parts.reduce((total, part) => total + part.exercises, 0)} exercises</h4>;
};

export default Total;
