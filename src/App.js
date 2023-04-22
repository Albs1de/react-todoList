// App.js
import React, { useState } from "react";
import todoList from "./components/TodoList";
import LeftBodySite from "./components/LeftSide/LeftBodySite";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [headTrigger, setHeadTrigger] = useState("All notes");

  const handleTodayClick = () => {
    const importantNotes = todoList.filter((note) => note.date === "today");
    setNotes(importantNotes);
    setHeadTrigger("Today notes");
  };

  const handleWeeklyClick = () => {
    const notImportantNotes = todoList.filter((note) => note.date === "week");
    setNotes(notImportantNotes);

    setHeadTrigger("This week notes");
  };
  const handleAddToDo = () => {
    const notImportantNotes = todoList.filter((note) => note.date === "month");
    setNotes(notImportantNotes);
  };

  return (
    <div>
      <LeftBodySite
        buttonName={"Today"}
        titleValue={"Today ToDo"}
        onClick={handleTodayClick}
      >
        {notes.map((note, index) => (
          <p key={index}>{note.text}</p>
        ))}
      </LeftBodySite>
      <LeftBodySite
        buttonName={"Second"}
        titleValue={"Second Title"}
      ></LeftBodySite>
    </div>
  );
};

export default App;
