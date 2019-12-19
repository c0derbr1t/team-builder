import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Members from './components/Members';
import Form from './components/Form';

function App() {
  const [members, setMembers] = useState([
    {
      id: Date.now(),
      name: 'Brittani',
      email: 'c0der.br1t@gmail.com',
      role: 'Front End Web Developer',
    }
  ])

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }
  return (
    <div className="App">
      <h1>My Teammates</h1>
      <Form />
      <Members members={members}/>
    </div>
  );
}

export default App;
