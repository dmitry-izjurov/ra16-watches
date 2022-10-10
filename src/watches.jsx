import React, { useState } from 'react';
import Watch from './watch';

function Watches() {
  
  const [arrWatches, setWatches] = useState(
    [
      {name: 'Moscow', timeZone: 3},
      {name: 'London', timeZone: 1},
    ]
  );

  const [ nameWatch, setNameWatch ] = useState('');
  const [ timeZoneWatch, setTimeZoneWatch ] = useState(3);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setNameWatch(() => value)
    else if (name === 'time-zone') setTimeZoneWatch(() => value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    setWatches((prev) =>  {
      const newState = prev.map(a => a);
      const index = newState.findIndex(a => a.name === nameWatch);
      if (index === -1) {
        newState.push({name: nameWatch, timeZone: Number(timeZoneWatch)});
        return newState;
      }
      else {
        alert('Часы с таким именем уже существуют!');
        return newState;
      } 
    });

    e.target.reset();
  }

  const remove = (e) =>  {
    setWatches((prev) => {
      const newState = prev.map(a => a);
      const id = e.target.closest('.wrapper__container-watch').querySelector('.title-watch').textContent;
      const newArr = newState.filter(a => a.name !== id)
      return newArr;
    })
  };

  return (
    <>
      <div className="wrapper__form_watches">
        <form className="form_watches" onSubmit={handleSubmit}>
          <label className="label_watches">
            <span className="text-input">Название</span>
            <input className="input_watches" type="text" name="name" onChange={handleChange} required  />
          </label>
          <label className="label_watches">
            <span className="text-input">Временная зона</span>
            <input className="input_watches" type="number" step="1" min="-12" max="14" name="time-zone" onChange={handleChange} required/>
          </label>
          <button className="button_watches" type="submit">Добавить</button>
        </form>
        <div className="wrapper__container-watches">
          {arrWatches.map(a => <Watch obj={a} key={a.name} remove={remove}/>)}
        </div>
      </div>
    </>
  );
}
            
export default Watches;