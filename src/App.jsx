import { useState } from 'react';
import './App.css';

export default function App() {
  const [guest, setGuest] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (eventObj) => {
    eventObj.preventDefault();
    
    const newGuest = {
      id: Date.now(),
      name: name,
      email: email
    };

    setGuest([...guest, newGuest]);
    setName('');
    setEmail('');
  };

  const removeGuest = (id) => {
    const filteredArray = guest.filter((g) => g.id !== id);
    setGuest(filteredArray);
  };

  return (
    <div>
      <h1>RSVP MANAGER</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        
        <label htmlFor='email'>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <button type="submit">Add Guest</button>
      </form>    

      <h2>Guest List</h2>
      
      {/* 1. Check if the array is empty */}
      {guest.length === 0 ? (
        <p>No guests attending yet.</p>
      ) : (
        /* 2. If not empty, map through the guests */
        guest.map((guestObj) => {
          return (
            <div key={guestObj.id} className="guest-item">
              <p>Name: {guestObj.name}</p>
              <p>Email: {guestObj.email}</p>
              {/* Added a button to hook up your removeGuest function */}
              <button onClick={() => removeGuest(guestObj.id)}>Remove</button>
            </div>
          );
        })
      )}
    </div>
  );
}