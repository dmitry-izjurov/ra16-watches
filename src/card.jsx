function Card( { id, text, remove } ) {
  return (
    <>
      <div className="box__card" data-id={id}>
        <p className="card-text">{text}</p>
        <button className="button_remove" onClick={remove}>x</button>
      </div>
    </>
  );
}
              
export default Card;