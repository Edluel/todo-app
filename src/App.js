import './styles/index.css';
import { useState } from 'react';
import Header from './components/header/Header';
import AddToDo from './components/addToDo/AddToDo';
import ToDoList from './components/toDoList/ToDoList';


function App() {
  const [theme, setTheme] = useState('dark');

  const [data, setData] = useState([
    {
      index: 0,
      text: 'Fazer compras',
      done: false
    },
    {
      index: 1,
      text: 'Estudar React',
      done: true
    },
    {
      index: 2,
      text: 'Caminhar no parque',
      done: false
    },
  ]);


  if (theme === 'dark') {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  } else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  }

  return (
    <div className="App">
      < Header theme={theme} setTheme={setTheme} />
      < AddToDo data={data} setData={setData} />
      < ToDoList data={data} setData={setData} />
    </div>
  );
}

export default App;
