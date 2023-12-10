
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { filterTasks } from "../redux/actions"

const ListTask = () => {
  const tasks = useSelector((state) => {
    if (state.filterType === "done") {
      return state.tasks.filter((task) => task.isDone);
    } else if (state.filterType === "notDone") {
      return state.tasks.filter((task) => !task.isDone);
    } else {
      return state.tasks;
    }
  });

  const dispatch = useDispatch();

  const handleFilterChange = (filterType) => {
    dispatch(filterTasks(filterType));
  };

  return (
    <div>
      <div>
        <button onClick={() => handleFilterChange("all")}>All</button>
        <button onClick={() => handleFilterChange("done")}>Done</button>
        <button onClick={() => handleFilterChange("notDone")}>Not Done</button>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
