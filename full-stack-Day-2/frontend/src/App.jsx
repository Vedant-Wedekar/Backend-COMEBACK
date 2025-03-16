import React, { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data);
    })
    .catch((error) => {
      console.log(error);
    }
    );
  }, []);

  return (
    <div>
      <h1>Jokes Generator</h1>
      <p>Jokes: {jokes.length}</p>
      
      {jokes.map((joke, index) => (
        <div key={index}>
          <h2>{joke.title}</h2>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
