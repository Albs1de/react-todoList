// App.js
import React, { useState } from "react";
import todoList from "./components/TodoList";
import ButtonPanel from "./components/ButtonPanel";
import BodyHandler from "./components/BodyHandler";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState(todoList);
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
      <ButtonPanel
        todoButton={handleAddToDo}
        weeklyButton={handleWeeklyClick}
        todayButton={handleTodayClick}
      />
      <BodyHandler headTrigger={headTrigger} notes={notes} />
    </div>
  );
};

export default App;
