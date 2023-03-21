import Header from './components/header/Header';
import './styles/index.css';
import { useState } from 'react';
import AddToDo from './components/addToDo/AddToDo';


function App() {
  const [theme, setTheme] = useState('dark');

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
      < AddToDo />
    </div>
  );
}

export default App;
