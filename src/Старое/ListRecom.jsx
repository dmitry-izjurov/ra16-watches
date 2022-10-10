// Отображает список с рекомендациями

import Item from './Item';

function ListRecom() {
  const list = ['Сейчас в СМИ', 'в России', 'Рекомендуем']

  return (
    <>
      <ul className="list_rec">{list.map((a,i) => <Item key={i} item={a}/>)}</ul>
    </>
  );
}
            
export default ListRecom;