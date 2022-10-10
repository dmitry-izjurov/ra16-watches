// Отображает блок с эфиром под поисковой строкой

import HeaderSectionItem from './HeaderSectionItem';

function SectionEf({ data, children }) {

  return (
    <div className="section-item">
      <HeaderSectionItem>{children}</HeaderSectionItem>
      {data.map((a,i) => <div className="section-text" key={i}><img src={a.key[0]} className="section-icon_ef" alt='pl' /><span>  {a.key[1]}</span></div>)}
    </div>
  );
}
                
export default SectionEf;
