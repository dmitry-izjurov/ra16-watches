// Отображает список с новостями

function ListNews({ news }) {
  const click = (e) => e.preventDefault();
  
  return (
    <>
      <ul className="list-news">{news.map((a,i) => <li className="item-news" key={i}>
        <div className="block-news">
          <img className="icon-news" src={a.icon} alt={a.news}/>
          <a href="#0" className="text-news" onClick={click}>{a.news}</a>
        </div>
      </li>)}</ul>
    </>
  );
}
            
export default ListNews;