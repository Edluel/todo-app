
import Header from './components/header/Header';
import index from './styles/index.css';
import { useState } from 'react';


function App() {
  const [theme, setTheme] = useState('dark');


  return (
    <div className="App">
      < Header theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
