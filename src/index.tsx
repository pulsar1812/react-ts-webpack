import React, { useState } from 'react';
import ReactDOM from 'react-dom';

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const toggleTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          required
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit'>Add Item</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => {
          return (
            <div key={index}>
              <div
                style={{ textDecoration: todo.complete ? 'line-through' : '' }}
              >
                {todo.text}
              </div>
              <button type='button' onClick={() => toggleTodo(index)}>
                {todo.complete ? 'Incomplete' : 'Complete'}
              </button>
              <button type='button' onClick={() => removeTodo(index)}>
                &times;
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app-root'));
