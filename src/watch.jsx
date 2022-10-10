import React, { useEffect, useState } from 'react';

function Watch( { obj, remove} ) {
  const dateNow = Date.now();
  function getDate(timeZone) {
    return new Date(dateNow - 3600000 * 3 + 3600000 * timeZone);
  }
  
  const [dateNew, setDateNew] = useState('');
  
  function dateStr(timeZone = 3) {
    const date = getDate(timeZone);
    return `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:${date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}`;
  }
  
  useEffect(() => {
    const timer = setInterval(() => {
      setDateNew(dateStr(obj.timeZone));
    }, 1000);
    return () => clearInterval(timer);
  });
  
  return (
    <>
      <div className="wrapper__container-watch">
        <div className="container-watch">
          <span className="title-watch">{obj.name}</span>
          <span className="watch">{dateNew}</span>
        </div>
        <button className="remove-watch" type="button" onClick={remove}>х</button>
      </div>
    </>
  );
}
              
export default Watch;