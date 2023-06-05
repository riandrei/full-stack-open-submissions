import Parts from './Parts';

const Content = ({ parts }) => {
  return (
    <>
      <Parts part={parts.part1} />
      <Parts part={parts.part2} />
      <Parts part={parts.part3} />
    </>
  );
};

export default Content;
