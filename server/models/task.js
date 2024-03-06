const db = require('../configure/db');

// retrieve all tasks
const getAllTasks = async () => {
  return db.any('SELECT * FROM tasks');
};

// Function to add a new task
const createTask = async (title, description) => {
  return db.none('INSERT INTO tasks(title, description, completed) VALUES($1, $2, $3)', [title, description, false]);
};

// Function to update a task's status
const updateTaskStatus = async (taskId, completed) => {
  return db.none('UPDATE tasks SET completed=$1 WHERE id=$2', [completed, taskId]);
};

// Function to delete a task
const deleteTask = async (taskId) => {
  return db.none('DELETE FROM tasks WHERE id=$1', [taskId]);
};

module.exports = {
  getAllTasks,
  createTask,
  updateTaskStatus,
  deleteTask,
};
