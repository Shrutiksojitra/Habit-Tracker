import React, { useState, useContext } from 'react';
import { HabitContext } from '../context/HabitContext';

const HabitForm = () => {
  const { addHabit } = useContext(HabitContext);
  const [habitName, setHabitName] = useState('');
  const [goal, setGoal] = useState('');
  const [startDate, setStartDate] = useState('');
  const [frequency, setFrequency] = useState('daily');

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit({ habitName, goal, startDate, frequency });
    setHabitName('');
    setGoal('');
    setStartDate('');
    setFrequency('daily');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
      <input type="text" placeholder="Habit Name" value={habitName} onChange={(e) => setHabitName(e.target.value)} className="border rounded p-2 w-full mb-2" />
      <input type="text" placeholder="Goal" value={goal} onChange={(e) => setGoal(e.target.value)} className="border rounded p-2 w-full mb-2" />
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border rounded p-2 w-full mb-2" />
      <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="border rounded p-2 w-full mb-2">
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white rounded p-2">Add Habit</button>
    </form>
  );
};

export default HabitForm;
