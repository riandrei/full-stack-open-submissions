import Parts from './Parts';

const Content = ({ parts }) => {
  return (
    <>
      <Parts part={parts[0]} />
      <Parts part={parts[1]} />
      <Parts part={parts[2]} />
    </>
  );
};

export default Content;
