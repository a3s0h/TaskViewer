const TaskModel = require('./models/tasks'); // Adjust the path based on your project structure

// Example task data
const newTask = {
  title: 'Sample Task',
  description: 'This is a sample task description',
};

// Insert a new task
TaskModel.createTask(newTask.title, newTask.description)
  .then(() => {
    console.log('Task added successfully');
  })
  .catch((error) => {
    console.error('Error adding task:', error);
  })
  .finally(() => {
    // Close the database connection (if needed)
    // db.$pool.end();
  });
