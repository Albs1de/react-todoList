const BodyHandler = ({ headTrigger, notes }) => {
  return (
    <div className="centered-content">
      <h1>{headTrigger}</h1>
      <div>
        <div className="centered-content">
          {notes.map((note, index) => (
            <p key={index}>{note.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyHandler;
