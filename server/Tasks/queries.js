const getAllTasks = "SELECT  * FROM tasks";
const getTaskDetailsById = `
    SELECT tasks.title, tasks.description, users.username
    FROM tasks
    INNER JOIN users ON tasks.user_id = users.id
    WHERE tasks.id = $1;
`;

const addUserQuery = "INSERT INTO users (username) VALUES ($1) RETURNING *";
const addTaskQuery = "INSERT INTO tasks (user_id , title, description,completed) VALUES ($1, $2, $3,$4) RETURNING *";
const checkUserQuery = "SELECT * FROM users WHERE username = $1";
const toggleTaskQuery = "UPDATE tasks SET completed = $1 WHERE id = $2 RETURNING *";
const updateTaskQuery = "UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *";
const removeTaskQuery = "DELETE FROM tasks WHERE id = $1 RETURNING *";
const getUsersByName = "SELECT tasks.title, tasks.description, tasks.completed,tasks.id FROM tasks JOIN users ON tasks.user_id = users.id WHERE users.username = $1";


module.exports = {
    getAllTasks,
    getTaskDetailsById,
    addUserQuery,
    addTaskQuery,
    checkUserQuery,
    toggleTaskQuery,
    updateTaskQuery,
    removeTaskQuery,
    getUsersByName
}