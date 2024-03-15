import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import TaskForm from './TaskForm';
import TaskViewer from './TaskViewer';
import useGetAllTasks from '../hooks/useGetAllTasks';
import EditForm from './EditForm';

const Dashboard = () => {
  const showForm = useSelector((store) => store.showForm?.showForm);
  const showEditForm = useSelector((store)=> store.showForm?.editForm);

  useGetAllTasks();

  return (
    <div className="relative flex flex-col h-full gap-[12rem] mx-auto">
      <Header />
      {showForm && <TaskForm />}
      {showEditForm && <EditForm/>}
      <TaskViewer/>
    </div>
  );
};

export default Dashboard;
