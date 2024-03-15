import axios from "axios";
import { updateTask } from "../utils/taskSlice";
import { useDispatch } from "react-redux";
import { setEditForm } from "../utils/showFormSlice";

const useEditTask = async (taskId, title, description) => {
  const dispatch = useDispatch();
  const data = {
    "completed": false, // Include completed status
    "description": description,
    "id": taskId, // Include task ID
    "title": title,
  };
  const reqData = {title : data.title ,description  : data.description}; // Extract only title and description
  try {
    const response = await axios.put(`http://localhost:3000/api/v1/tasks/${taskId}/update`, reqData);
    dispatch(updateTask());
    dispatch(setEditForm());
  } catch (error) {
    console.error('Error updating task:', error);
  }


};

export default useEditTask;
