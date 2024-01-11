
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../redux/actions"

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEditTask = () => {
    dispatch(editTask(task.id, newDescription));
    setEditing(false);
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleTask}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            aria-label="Edit task description"
          />
          <button onClick={handleEditTask}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Task;