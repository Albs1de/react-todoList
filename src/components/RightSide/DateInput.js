// DateInput.js
import React from "react";

const DateInput = ({
  selectedDate,
  onSelectedDateChange,
  inputText,
  handleInputChange,
}) => {
  return (
    <div className="dateInput">
      <label htmlFor="input-text">Text eingeben: </label>
      <input
        type="text"
        id="input-text"
        value={inputText}
        onChange={handleInputChange} // Ändern Sie dies
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
