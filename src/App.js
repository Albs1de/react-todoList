// App.js
import React, { useState } from "react";
import todoList from "./components/TodoList";
import LeftBodySite from "./components/LeftSide/LeftBodySite";

import "./App.css";
import Output from "./components/RightSide/Output";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [headTrigger, setHeadTrigger] = useState("All notes");
  const [showAddNoteBtn, setShowAddBtn] = useState(false);
  const [showAddNoteBtnWeekly, setShowAddBtnWeekly] = useState(false);
  const [selectedDate, onSelectedDateChange] = useState("");
  const [btnName, setBtnName] = useState("");
  const [inputText, setInputText] = useState("");

  const handleTodayClick = () => {
    const importantNotes = todoList.filter((note) => note.date === "today");
    setNotes(importantNotes);
    setHeadTrigger("Today Todo");
    setShowAddBtn(true);
    setShowAddBtnWeekly(false);
    setBtnName("Add today note");
  };

  const handleWeeklyClick = () => {
    const notImportantNotes = todoList.filter((note) => note.date === "week");
    setNotes(notImportantNotes);
    setHeadTrigger("This week todo");
    setShowAddBtn(false);
    setShowAddBtnWeekly(true);
    setBtnName("Add weekly todo");
  };

  const handleDateChange = (event) => {
    onSelectedDateChange(event.target.value);
  };

  const handleOnClick = () => {
    const newToDo = {
      text: inputText,
      important: true,
      date: selectedDate,
    };
    setNotes((notes) => [...notes, newToDo]);
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div className="container">
      <div className="left-side">
        <LeftBodySite
          buttonName={"Today"}
          titleValue={"Today ToDo"}
          onClick={handleTodayClick}
        ></LeftBodySite>
        <LeftBodySite
          buttonName={"This week"}
          titleValue={"Weekly ToDo"}
          onClick={handleWeeklyClick}
        ></LeftBodySite>
      </div>
      <div className="right-side">
        <Output
          titleValue={headTrigger}
          btnName={btnName}
          showAddNoteBtn={showAddNoteBtn}
          showAddNoteBtnWeekly={showAddNoteBtnWeekly}
          selectedDate={selectedDate}
          onSelectedDateChange={handleDateChange}
          onClick={handleOnClick}
          handleInputTextChange={handleInput}
        >
          {notes.map((note, index) => (
            <p key={index}>
              {note.text} {note.date}
            </p>
          ))}
        </Output>
      </div>
    </div>
  );
};

export default App;
