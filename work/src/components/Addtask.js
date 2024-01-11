
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions"

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (description.trim() !== "") {
      const id = Date.now();
      dispatch(addTask(id, description));
      setDescription("");
    }
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
