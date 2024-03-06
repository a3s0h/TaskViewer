import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowForm } from '../utils/showFormSlice';
import Header from './Header';
import TaskForm from './TaskForm';

const Dashboard = () => {
  const dispatch = useDispatch();
  const showForm = useSelector((state) => state.showForm);

  return (
    <div className="flex flex-col gap-10">
      <Header />
      {showForm && <TaskForm />}
      
    </div>
  );
};

export default Dashboard;
