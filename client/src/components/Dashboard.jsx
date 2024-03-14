import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import TaskForm from './TaskForm';
import TaskViewer from './TaskViewer';
import useGetAllTasks from '../hooks/useGetAllTasks';

const Dashboard = () => {
  const showForm = useSelector((store) => store.showForm?.showForm);

  useGetAllTasks();

  return (
    <div className="relative flex flex-col h-full gap-[12rem] mx-auto">
      <Header />
      {showForm && <TaskForm />}
      <TaskViewer/>
    </div>
  );
};

export default Dashboard;
