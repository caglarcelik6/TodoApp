import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
    <ul className="todo-list">
        {todos.map((todo, index) => (
            <Todo
                key={index}
                index={index}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        ))}
    </ul>
);

export default TodoList;
