import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState('');

  async function getText() {
    try {
      const response = await axios.get('/api');
      setText(response.data);
    } catch (e) {
      console.error(e);
      setText('Default Text');
    }
  }

  useEffect(() => {
    if (!text) {
      getText();
    }
  });
  return (
    <div className="App">
      { text }
    </div>
  );
}

export default App;
