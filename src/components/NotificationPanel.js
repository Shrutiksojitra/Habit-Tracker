import React, { useContext } from 'react';
import { HabitContext } from '../context/HabitContext';

const NotificationPanel = () => {
  const { habits } = useContext(HabitContext);
  const notifications = habits.filter(habit => habit.completed).map(habit => ({
    message: `Great job! You completed your habit: ${habit.habitName}!`,
    date: new Date(habit.completedDate).toLocaleDateString(),
  }));

  return (
    <div className="bg-gray-100 p-4 rounded shadow-lg mt-4">
      <h2 className="text-xl font-bold mb-2">Notifications</h2>
      {notifications.length === 0 ? (
        <p>No new notifications.</p>
      ) : (
        <ul className="space-y-2">
          {notifications.map((notification, index) => (
            <li key={index} className="bg-white p-2 rounded border-l-4 border-blue-500">
              <p>{notification.message}</p>
              <span className="text-gray-500 text-sm">{notification.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationPanel;
