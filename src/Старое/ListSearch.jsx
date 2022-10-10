// Отображает список над строкой поиска
import Item from './Item';

function ListSearch({ list }) {
    return (
      <>
        <ul className="list-search">{list.map((a,i) => <Item key={i} item={a} />)}</ul>
      </>
    );
  }
              
  export default ListSearch;