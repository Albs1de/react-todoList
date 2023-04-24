import "../../styles/ButtonPanel.css";

const ButtonLeft = ({ onClick, children }) => {
  return (
    <>
      <button className="button-left" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default ButtonLeft;
