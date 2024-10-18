import React from 'react';
import { HabitProvider } from './context/HabitContext';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  return (
    <HabitProvider>
      <div className="min-h-screen bg-gray-50 p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Habit Tracker</h1>
        <Dashboard />
      </div>
    </HabitProvider>
  );
};

export default App;
