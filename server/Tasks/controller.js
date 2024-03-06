const pool = require("../db");
const {getAllTasks,getTaskDetailsById , addUserQuery , addTaskQuery,checkUserQuery,toggleTaskQuery,updateTaskQuery,removeTaskQuery}  = require("./queries")

const getTasks = (req,res)=>{
    pool.query(getAllTasks, (error, result) =>{
        if(error){ console.log(error);return ;}

        res.status(200).json(result.rows);
    })
    console.log("getting students");
}

const getById = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(getTaskDetailsById , [id] , (error , result)=>{
        if(error){ console.log(error) ; return ;}

        res.status(200).json(result.rows);
    })
}

const addTask = (req, res) => {
    const { username, title, description, completed } = req.body;

    // Add validation for required fields

    // Check if the user already exists
    pool.query(checkUserQuery, [username], (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (result.rows.length === 0) {
            // If user doesn't exist, add the user
            pool.query(addUserQuery, [username], (addError, addResult) => {
                if (addError) {
                    console.log(addError);
                    return res.status(500).json({ error: "Internal Server Error" });
                }

                // Now, add the task with the user_id of the newly added user
                const userId = addResult.rows[0].id;

                pool.query(addTaskQuery, [userId,title, description, completed], (taskError, taskResult) => {
                    if (taskError) {
                        console.log(taskError);
                        return res.status(500).json({ error: "Internal Server Error" });
                    }

                    res.status(201).json(taskResult.rows[0]);
                });
            });
        } else {
            // If user already exists, directly add the task
            const userId = result.rows[0].id;

            pool.query(addTaskQuery, [userId,title, description, completed], (taskError, taskResult) => {
                if (taskError) {
                    console.log(taskError);
                    return res.status(500).json({ error: "Internal Server Error" });
                }

                res.status(201).json(taskResult.rows[0]);
            });
        }
    });
};

const toggleTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const { completed } = req.body;

    pool.query(toggleTaskQuery, [completed, taskId], (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.status(200).json(result.rows[0]);
    });
};




const updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description } = req.body;

    pool.query(updateTaskQuery, [title, description, taskId], (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.status(200).json(result.rows[0]);
    });
};

const removeTask = (req, res) => {
    const taskId = parseInt(req.params.id);

    pool.query(removeTaskQuery, [taskId], (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.status(200).json({ message: "Task removed successfully" });
    });
};

module.exports = {
    getTasks,
    getById,
    addTask,
    toggleTask,
    updateTask,
    removeTask

}