const ButtonLeft = ({ onClick, children }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
};

export default ButtonLeft;
