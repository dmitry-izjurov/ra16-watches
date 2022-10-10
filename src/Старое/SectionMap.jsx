// Отображает блок с картой под поисковой строкой

import HeaderSectionItem from './HeaderSectionItem';

function SectionMap({ children }) {
  
    return (
      <div className="section-item">
        <HeaderSectionItem>{children}</HeaderSectionItem>
        <div className="section-list">Расписания</div>
      </div>
    );
  }
                  
  export default SectionMap;
  