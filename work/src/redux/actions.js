
export const addTask = (id, description) => ({
  type: "ADD_TASK",
  payload: { id, description, isDone: false },
});

export const toggleTask = (id) => ({
  type: "TOGGLE_TASK",
  payload: { id },
});

export const editTask = (id, description) => ({
  type: "EDIT_TASK",
  payload: { id, description },
});

export const filterTasks = (filterType) => ({
  type: "FILTER_TASKS",
  payload: { filterType },
});
