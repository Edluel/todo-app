import React, { useState } from 'react';

export default function ToDoMenu(props) {
  const { data, setData } = props;
  const [filter, setFilter] = useState('all');

  // função para definir a propriedade hidden de cada item com base no filtro selecionado
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
  };

  // função para limpar todos os itens concluídos
  const clearCompleted = () => {
    const newData = data.filter((item) => !item.done);
    setData(newData);
  };

  // contar quantos itens estão com done = false
  const countIncomplete = () => {
    return data.filter((item) => !item.done).length;
  };

  return (
    <div className="to-do-list-menu">
      <span>{countIncomplete()} items left</span>
      <button onClick={() => updateDataVisibility('all')}>All</button>
      <button onClick={() => updateDataVisibility('incomplete')}>Active</button>
      <button onClick={() => updateDataVisibility('completed')}>Completed</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}
