import React from 'react';

const HabitCard = ({ habit }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold">{habit.habitName}</h2>
      <p>Goal: {habit.goal}</p>
      <p>Frequency: {habit.frequency}</p>
    </div>
  );
};

export default HabitCard;
