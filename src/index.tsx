import React from 'react';
import ReactDOM from 'react-dom';

export default function App(): JSX.Element {
  return (
    <>
      <h1>Todo List</h1>
      <form>
        <input type='text' required />
        <button type='submit'>Add Item</button>
      </form>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app-root'));
