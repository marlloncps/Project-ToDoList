import React, { useState } from 'react';
import './styles/App.css';
import Input from './Components/Input';
import List from './Components/List';


function App() {
  const [task, setTask] = useState('');
  
  const handleInputChange = (value: string) => {
    console.log(value);

    setTask(value);
  };

  

  return (
    <>
      <main>
        <h1>Bem vindo ao ToDoList</h1>
        <h6>
          Uma lista de tarefas desenvolvida em TypeScript + React com várias
          funcionalidades.
        </h6>
        <div>
          <Input onInputChange={handleInputChange} />
        </div>
        <List />
      </main>
    </>
  );
}

export default App;
