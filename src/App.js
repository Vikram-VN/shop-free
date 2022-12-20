import './App.css';
import React, { useState, useReducer } from 'react'

export const Table = (props) => {
  return <h1>Results: {props.products.toString()}</h1>;
};

export default function App() {
  const limit = 2;
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  // const [offset, setoffset] = useState(0);
  
  const [offset, setoffset] = useReducer((state, action) => {
    switch (action.action) {
      case "decrement":
        return state - limit;
      default:
        return state + limit;
    }
  }, 0);
  const [newOffset, newoffset] = useState(limit);

  const prev = () => {
    if (offset >= 2) {
      // setoffset(offset - limit);
      setoffset({ action: "decrement" });
      newoffset(newOffset - limit);
    }
  };

  const next = () => {
    if (offset < items.length - limit) {
      // setoffset(offset + limit);
      setoffset({ action: "increment" });
      newoffset(newOffset + limit);
    }
  };

  return (
    <div className="App">
      <Table products={items.slice(offset, newOffset)} />
      <button onClick={prev}>Previous Page</button>
      <button onClick={next}>Next Page</button>
    </div>
  );
}
