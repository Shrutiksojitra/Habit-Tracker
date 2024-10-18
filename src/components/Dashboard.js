import React, { useContext, useEffect } from 'react';
import { HabitContext } from '../context/HabitContext';
import HabitForm from './HabitForm';
import HabitCard from './HabitCard';
import NotificationPanel from './NotificationPanel';
import Profile from './Profile';

const Dashboard = () => {
  const { habits, fetchHabits } = useContext(HabitContext);

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">My Habits</h1>
      <HabitForm />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
      <NotificationPanel />
      <Profile />
    </div>
  );
};

export default Dashboard;
