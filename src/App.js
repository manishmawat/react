// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [characters, setCharacters] = useState([
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
  ]);

  const removeCharacter = (index)=>{
    console.log(characters);
    setCharacters(characters.filter((item,itemIndex)=>{
      return itemIndex !== index;
    }));
  }

  const handleSubmit = (character) => {
    setCharacters([...characters,character]);
  }

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit}/>
      <Table charactersData={characters} removeCharacter={removeCharacter}/>
    </div>
  );
}

export default App;
