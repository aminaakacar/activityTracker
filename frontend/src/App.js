import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [view, setView] = useState('form');
  const [showHomeScreen, setShowHomeScreen] = useState(true);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [activities, setActivities] = useState([]);

  const handleDelete = (indexToDelete) => {
    const updatedActivities = activities.filter((_, index) => index !== indexToDelete);
    setActivities(updatedActivities);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || duration <= 0) {
      alert('Please enter a name and a positive duration.');
      return;
    }

    const newActivity = {
      name,
      description,
      category,
      date,
      duration,
    };

    setActivities([...activities, newActivity]);
    setName('');
    setDescription('');
    setCategory('');
    setDate('');
    setDuration('');
  };

  if (showHomeScreen) {
    return (
      <div className="home-screen">
        <h1>Welcome to Your Free Time Tracker 🌿</h1>
        <p>Track your daily activities like reading, walking, cooking, and more.</p>
        <button onClick={() => setShowHomeScreen(false)}>Let’s Start</button>
      </div>
    );
  }

  function formatDate(dateString) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}


  return (
    <div className="app-container">
      <h1>Free Time Activity Tracker</h1>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setView('form')} style={{ marginRight: '10px' }}>
          Add Activity
        </button>
        <button onClick={() => setView('list')}>
          View Activities
        </button>
      </div>

      {view === 'form' && (
        <div className="form-section">
          <h2>Add New Activity</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name of activity"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="text"
              placeholder="Category (e.g., Reading, Gaming)"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <input
              type="number"
              placeholder="Duration (minutes)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />

            <button type="submit">Add Activity</button>
          </form>
        </div>
      )}

{view === 'list' && (
  <div className="activity-list">
    <h2>Activities</h2>

    {activities.length > 0 && (
      <div style={{ marginBottom: '15px' }}>
        <label style={{ marginRight: '10px' }}>Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          {[...new Set(activities.map(a => a.category))].map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    )}

    {activities.length === 0 ? (
      <p>No activities yet.</p>
    ) : (
      <ul>
        {activities
          .filter(activity => selectedCategory === 'All' || activity.category === selectedCategory)
          .map((activity, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <strong>{activity.name}</strong>
              <br />
              {formatDate(activity.date)} • {activity.duration} mins
              <br />
              <button
                onClick={() => handleDelete(index)}
                style={{ marginTop: '5px' }}
              >
                Delete
              </button>
            </li>
        ))}
      </ul>
    )}
  </div>
)}
    </div>
  );
}

export default App;

