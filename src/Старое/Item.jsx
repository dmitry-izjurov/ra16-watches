// Отображает элемент с рекомендацией

function Item({ item }) {
  const click = (e) => e.preventDefault();
  return (
    <>
      <li className="item"><a href="#0" className="link-search" onClick={click}>{item}</a></li>
    </>
  );
}
            
export default Item;
// <a href="#0" className="link-search" onClick={click}>{a}</a>