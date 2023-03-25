import React from 'react';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './toDoList.css';

export default function ToDoList(props) {
  const { data, setData } = props;

  // invert o done ao clicar no checkbox
  const handleCheck = (index) => {
    const newData = [...data];
    newData[index].done = !newData[index].done;
    setData(newData);
  };

  // função para reordenar os itens da lista
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const newData = [...data];
    const [removed] = newData.splice(source.index, 1);
    newData.splice(destination.index, 0, removed);
    setData(newData);
  };

  return (
    <div className="to-do-list-container">
      {/* o DragDropContext é o componente que envolve toda a aplicação */}
      <DragDropContext onDragEnd={handleDragEnd}>
        {/* o Droppable é o componente que envolve a lista */}
        <Droppable droppableId="list">
          {(provided) => (
            // o Droppable precisa de uma função como child, ele torna a área reordenável
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {data.map((item, index) => (
                // carrega os itens da lista
                <Draggable key={item.index} draggableId={String(item.index)} index={index}>
                  {(provided, snapshot) => (
                    // item reordenável, precisa de key para funcionar
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={snapshot.isDragging ? 'isDragging' : ''}
                    >
                      <label>
                        <input type="checkbox" checked={item.done} onChange={() => handleCheck(index)} />
                        <span className={item.done ? 'done-text' : ''}>{item.text}</span>
                      </label>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
