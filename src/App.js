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
    const todayDate = formatDate(new Date());
    const importantNotes = todoList.filter((note) => note.date === todayDate);
    setNotes(importantNotes);
    setHeadTrigger("Today Todo");
    setShowAddBtn(true);
    setShowAddBtnWeekly(false);
    setBtnName("Add today note");
  };
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const getStartAndEndOfWeek = (date) => {
    const current = new Date(date);
    const first = current.getDate() - current.getDay() + 1;
    const last = first + 6;

    const startOfWeek = new Date(current.setDate(first));
    const endOfWeek = new Date(current.setDate(last));

    return { startOfWeek, endOfWeek };
  };

  const handleWeeklyClick = () => {
    setHeadTrigger("This week todo");
    setShowAddBtn(false);
    setShowAddBtnWeekly(true);
    setBtnName("Delete last Todo");

    const currentDate = new Date();
    const { startOfWeek, endOfWeek } = getStartAndEndOfWeek(currentDate);

    const weeklyNotes = todoList.filter((note) => {
      const noteDate = parseDate(note.date);
      const formattedNoteDate = formatDate(noteDate);
      return (
        formattedNoteDate >= formatDate(startOfWeek) &&
        formattedNoteDate <= formatDate(endOfWeek)
      );
    });
    setNotes(weeklyNotes);
  };
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("-");
    return new Date(year, month - 1, day);
  };

  const handleDateChange = (event) => {
    onSelectedDateChange(event.target.value);
  };

  const handleOnClick = () => {
    const newToDo = {
      text: inputText,
      important: true,
      date: formatDate(new Date(selectedDate)),
    };
    setNotes((notes) => [...notes, newToDo]);
  };

  const handleDeleteLastNote = () => {
    setNotes((prevNotes) => {
      if (prevNotes.length > 0) {
        return prevNotes.slice(0, prevNotes.length - 1);
      }
      return prevNotes;
    });
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleDeleteNote = (noteIndex) => {
    setNotes((prevNotes) =>
      prevNotes.filter((_, index) => index !== noteIndex)
    );
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
          handleDeleteLastNote={handleDeleteLastNote}
        >
          {notes.map((note, index) => (
            <div key={index} className="note">
              <p>
                {note.text} {note.date}
              </p>
              <button
                className="btn-right"
                onClick={() => handleDeleteNote(index)}
              >
                Delete
              </button>{" "}
            </div>
          ))}
        </Output>
      </div>
    </div>
  );
};

export default App;
