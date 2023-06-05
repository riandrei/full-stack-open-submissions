import Parts from './Parts';

const Content = ({ parts, exercises }) => {
  return (
    <>
      <Parts part={parts.part1} exercise={exercises.exercises1} />
      <Parts part={parts.part2} exercise={exercises.exercises2} />
      <Parts part={parts.part3} exercise={exercises.exercises3} />
    </>
  );
};

export default Content;
