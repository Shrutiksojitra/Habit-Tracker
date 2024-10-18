import React, { createContext, useState } from 'react';

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [user, setUser] = useState({ name: '', email: '', goal: '' });

  const fetchHabits = async () => {
    const response = await fetch('http://localhost:3001/habits');
    const data = await response.json();
    setHabits(data);
  };

  const addHabit = async (newHabit) => {
    const response = await fetch('http://localhost:3001/habits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHabit),
    });
    const data = await response.json();
    setHabits((prev) => [...prev, data]);
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <HabitContext.Provider value={{ habits, fetchHabits, addHabit, user, updateUser }}>
      {children}
    </HabitContext.Provider>
  );
};
