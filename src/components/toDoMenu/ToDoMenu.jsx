import React, { useState } from 'react';
import './toDoMenu.css';

export default function ToDoMenu(props) {
  const { data, setData } = props;
  const [filter, setFilter] = useState('all');
  const [activeFilter, setActiveFilter] = useState('all'); // novo estado para armazenar o filtro ativo

  const updateDataVisibility = (filter) => {
    setData(
      data.map((item) => {
        if (filter === 'completed') {
          return { ...item, hidden: !item.done };
        } else if (filter === 'incomplete') {
          return { ...item, hidden: item.done };
        } else {
          return { ...item, hidden: false };
        }
      })
    );
    setFilter(filter);
    setActiveFilter(filter);
  };

  const clearCompleted = () => {
    const newData = data.filter((item) => !item.done);
    setData(newData);
  };

  const countIncomplete = () => {
    return data.filter((item) => !item.done).length;
  };

  return (
    <div className="list-menu">
      <span className='list-menu-left'>{countIncomplete()} items left</span>
      <div className='list-menu-items'>
        <div className="list-menu-items-filter">
          <button 
            className={`list-menu-items-filter-all ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => updateDataVisibility('all')}>
              All
          </button>
          <button 
            className={`list-menu-items-filter-incomplete ${activeFilter === 'incomplete' ? 'active' : ''}`} 
            onClick={() => updateDataVisibility('incomplete')}>
              Active
          </button>
          <button 
            className={`list-menu-items-filter-complete ${activeFilter === 'completed' ? 'active' : ''}`}
            onClick={() => updateDataVisibility('completed')}>
              Completed
          </button>
        </div>
        <button
          className='list-menu-items-clear'
          onClick={clearCompleted}>
            Clear Completed
        </button>
      </div>
    </div>
  );
}
