import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Input from './Components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

function TaskItem({ value, index, onDelete }: { value: string, index: number, onDelete: (index: number) => void }) {
  return (
    <li className='item'>
      {value}
      <FontAwesomeIcon
        onClick={() => onDelete(index)}
        id='icon-del'
        icon={faDeleteLeft}
      />
    </li>
  );
}


function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    const arrayTasks = storedTasks ? JSON.parse(storedTasks) : [];
    setTasks(arrayTasks);
  }, []);

  const addTask = (value: string) => {
    if (value === '') return 
    const updatedTasks = [...tasks, value];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
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
          <Input push={addTask} />
        </div>
        <section>
          <div className='list'>
            <ul>
              {tasks.map((task, index) => (
                <TaskItem
                  key={index}
                  value={task}
                  index={index}
                  onDelete={deleteTask}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
