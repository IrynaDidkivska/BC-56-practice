import React from 'react';

export const TodoList = () => {
  return (
    <>
      <form>
        <input type="text" />
        <button>Add</button>
      </form>
      <hr />
      <section>
        <ul>
          <li>
            Hello <button>Delete</button>
          </li>
        </ul>
      </section>
    </>
  );
};
