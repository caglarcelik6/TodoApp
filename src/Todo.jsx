import React from 'react';

const Todo = ({ todo, index, toggleTodo, deleteTodo }) => (
    <li className={todo.done ? 'completed' : ''}>
        <div className="view">
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(index)}
            />
            <label>{todo.text}</label>
            <button onClick={() => deleteTodo(index)}>×</button>
        </div>
    </li>
);

export default Todo;
