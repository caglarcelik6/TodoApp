import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css'

const App = () => {
    const [todos, setTodos] = useState([
        { text: 'Taste JavaScript', done: true },
        { text: 'Code furiously', done: true },
        { text: 'Promote Mavo', done: false },
        { text: 'Give talks', done: false },
        { text: 'Write tutorials', done: true },
        { text: 'Have a life!', done: false },
    ]);

    const addTodo = (text) => {
        setTodos([...todos, { text, done: false }]);
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const newTodo = e.target.elements.todo.value;
                    if (newTodo) {
                        addTodo(newTodo);
                        e.target.reset();
                    }
                }}>
                    <input name="todo" className="new-todo" placeholder="What needs to be done?" autoFocus />
                </form>
            </header>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;

