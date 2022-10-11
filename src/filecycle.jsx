import React, { useState } from 'react';
import Card from './card';

function Filecycle() {
  const [ cards, getCards ] = useState([]);
  
  const handleUpdate = e => {
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:7070/notes/?method=allCards';
    xhr.open('GET', url);
    xhr.send();

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const data = JSON.parse(xhr.responseText);
          if (data.length >= 0) {
            getCards(() => data);
          }
      } catch (e) {
          console.error(e);
        }
      }
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const elemFormAdd = document.querySelector('.form[name=add-card]');
    const formData = new FormData(elemFormAdd);
    formData.append('id', 0);
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:7070/notes/?method=createCard';
    xhr.open('POST', url);
    xhr.send(formData);

    setTimeout(handleUpdate, 100);

    e.target.reset();
  }

  const remove = e =>  {
    const id = e.target.closest('.box__card').dataset.id;
    const xhr = new XMLHttpRequest();
    const url = `http://localhost:7070/notes/${id}`;
    xhr.open('DELETE', url);
    xhr.send();

    setTimeout(handleUpdate, 100);
  };

  window.onload = e => handleUpdate();

  return (
    <>
      <div className="wrapper_filecycle">
        <header className="header">
          <h1>Notes</h1>
          <button className="button_update" type="button" onClick={handleUpdate}>Обновить</button>
        </header>
        <div className="box__cards">
          {cards.map(a => <Card id={a.id} key={a.id} text={a.text} remove={remove} />)}
        </div>
        <form className="form" name="add-card" onSubmit={handleSubmit}>
          <header className="form__header">New note</header>
          <label className="field-group">
            <textarea className="textarea" name="textarea" required></textarea>
          </label>
          <div className="block-buttons">
            <button className="form__button form__buttons">Добавить</button>
          </div>
        </form>
      </div>
    </>
  );
}
            
export default Filecycle;