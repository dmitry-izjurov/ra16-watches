// Отображает блок с погодой под поисковой строкой

import HeaderSectionItem from './HeaderSectionItem';

function SectionPog({ data, children }) {

  return (
    <div className="section-item">
      <HeaderSectionItem>{children}</HeaderSectionItem>
      <div className="section-list">
        <div className="section-list__header">
          <img src={data.icon} className="section-list__icon" alt="Погода" />
          <span className="section-list__main-text">{data.pogNow}</span>
        </div>
        <div className="section-list__main">
          <p className="section-list__text">Утром {data.pogNow},</p>
          <p className="section-list__text">днём {data.pogDay}</p>
        </div>
      </div>
    </div>
  );
}
                
export default SectionPog;
