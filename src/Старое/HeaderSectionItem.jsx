// Отображает блок с картой под поисковой строкой

function HeaderSectionItem({ children }) {
  const click = (e) => e.preventDefault();
  return (
    <header className="header">
      <a href="#0" className="link-search" onClick={click}>{children}</a>
    </header>
  );
}
                  
export default HeaderSectionItem;
  