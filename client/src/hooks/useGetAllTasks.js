import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../utils/taskSlice";
import { useEffect } from "react";


const useGetAllTasks = () => {
    const user = useSelector((store) => store.user?.username?.displayName);
  const tasks = useSelector((store) => store.tasks?.allTasks)
  const dispatch = useDispatch();

  console.log(user);
  const fetchTasksByUsername = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/tasks/user/Daku`);
      const tasksData = response; 
      dispatch(addTask(tasksData?.data)); 
      console.log("data : ", tasksData);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
  
  console.log("tasks" , tasks);
  useEffect(() => {
    !tasks && fetchTasksByUsername();
  }, []);

}

export default useGetAllTasks;