import React, { useState } from 'react';
import '../Css/Agenda.css';

const Agenda = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const newItem = prompt('Adicione um item:');
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div id="Agenda">
      <h2 id="Agendah2">Lista de compras</h2>
      <ul id="Agendaul">
        {items.map((item, index) => (
          <li key={index} id="Agendali">
            {item}{' '}
            <button onClick={() => handleDeleteItem(index)} id="Agendalibutton">Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddItem} id="Agendabutton">Adicione um produto</button>
    </div>
  );
};

export default Agenda;
