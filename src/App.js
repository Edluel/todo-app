import './styles/index.css';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import AddToDo from './components/addToDo/AddToDo';
import ToDoList from './components/toDoList/ToDoList';

function App() {
  const defaultData = [
    {
      index: 0,
      text: 'Fazer compras',
      done: false,
      hidden: false
    },
    {
      index: 1,
      text: 'Estudar React',
      done: true,
      hidden: false
    },
    {
      index: 2,
      text: 'Caminhar no parque',
      done: false,
      hidden: false
    },
  ];

  const getDefaultTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'dark';
  }

  const [theme, setTheme] = useState(getDefaultTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [theme]);

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('data');
    return storedData ? JSON.parse(storedData) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />
      <AddToDo data={data} setData={setData} />
      <ToDoList data={data} setData={setData} />
    </div>
  );
}

export default App;
