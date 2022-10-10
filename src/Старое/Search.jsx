// Отображает блок со строкой поиска

function Search({ icon }) {
  const click = (e) => {
    e.preventDefault();
    e.target.reset();
  }
  
  return (
    <>
    <form className="block-search" onSubmit={click}>
      <img className="icon-search" alt="search" src={icon} />
      <label>
        <input type="text" className="input-search" placeholder="Найдётся всё"/>
      </label>
      <button className="button-search" type="submit">Найти</button>
    </form>
    <p>Найдётся всё. Например, фаза Луны сегодня</p>
    </>
  );
}
              
export default Search;