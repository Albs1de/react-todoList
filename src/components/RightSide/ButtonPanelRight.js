const ButtonRight = ({ btnName, onClick }) => {
  return (
    <>
      <button className="btn-right" onClick={onClick}>
        {btnName}
      </button>
    </>
  );
};

export default ButtonRight;
