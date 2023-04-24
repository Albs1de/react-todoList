const OutputTitle = ({ children }) => {
  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  };

  return (
    <>
      <h1 style={titleStyle}>{children}</h1>
    </>
  );
};

export default OutputTitle;
