import todoList from "../TodoList";

const DateInput = ({
  selectedDate,
  onSelectedDateChange,
  inputText,
  onInputTextChange,
}) => {
  return (
    <div className="dateInput">
      <label htmlFor="text-input">Neue Todo erstellen: </label>
      <input
        type="text"
        id="text-input"
        value={inputText}
        onChange={onInputTextChange}
      />
      <label htmlFor="date-picker">Datum auswählen: </label>
      <input
        type="date"
        id="date-picker"
        value={selectedDate}
        onChange={onSelectedDateChange}
      />
    </div>
  );
};

export default DateInput;
