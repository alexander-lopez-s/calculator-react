const Screen = ({ input, result }) => {
  return (
    <div className="screen">
      <div className="input">{input}</div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Screen;
