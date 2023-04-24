import OutputTitle from "./OutputTitle";
import OutputNotes from "./OutputTodo";
import ButtonRight from "./ButtonPanelRight";
import DateInput from "./DateInput";
import "../../styles/Output.css";

const Output = ({
  children,
  titleValue,
  btnName,
  showAddNoteBtn,
  showAddNoteBtnWeekly,
  selectedDate,
  onSelectedDateChange,
  onClick,
  handleInputTextChange,
  inputText,
}) => {
  return (
    <div className="output">
      <OutputTitle>{titleValue}</OutputTitle>
      <OutputNotes>{children}</OutputNotes>
      {showAddNoteBtn && (
        <DateInput
          selectedDate={selectedDate}
          onSelectedDateChange={onSelectedDateChange}
          inputText={inputText}
          onInputTextChange={handleInputTextChange}
        />
      )}
      {showAddNoteBtn && <ButtonRight onClick={onClick} btnName={btnName} />}
      {showAddNoteBtnWeekly && (
        <ButtonRight onClick={onClick} btnName={btnName} />
      )}
    </div>
  );
};

export default Output;
