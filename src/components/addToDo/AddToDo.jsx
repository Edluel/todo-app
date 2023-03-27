import React, {useState} from 'react'
import './addToDo.css'

export default function AddToDo(props) {
  const { data, setData } = props
  const [newTodoText, setNewTodoText] = useState('');
  const [isChecked, setIsChecked] = useState(false);


  function handleInputChange(event) {
    setNewTodoText(event.target.value);
  }

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
      index: data.length,
      text: newTodoText,
      done: isChecked,
      hidden: false,
    };
    setData([...data, newTodo]);
    setNewTodoText('');
    setIsChecked(false);
  }


  return (
    <div className="add">
      <form  onSubmit={handleSubmit}>
        <label>
          <input
            className='add-chekbox'
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <input
            type="text"
            placeholder="Create new todo"
            value={newTodoText}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
