import React, { useContext, useState } from 'react';
import { HabitContext } from '../context/HabitContext';

const Profile = () => {
  const { user, updateUser } = useContext(HabitContext);
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [goal, setGoal] = useState(user.goal || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, email, goal });
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow-lg mt-4">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Personal Goal</label>
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="Your Personal Goal"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 w-full"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
