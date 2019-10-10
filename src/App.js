import React from 'react';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Contact avatar = 'https://randomuser.me/api/portraits/men/88.jpg' name = "Tim Shelton" online />
      <Contact avatar = 'https://randomuser.me/api/portraits/women/60.jpg' name = "Joan Jacobs" online />
      <Contact avatar = 'https://randomuser.me/api/portraits/women/88.jpg' name = "Nellie Simmmons"  />
    </div>
  );
}

export default App;
