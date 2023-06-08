import Parts from './Parts';

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Parts key={part.id} part={part} />
      ))}
    </>
  );
};

export default Content;
