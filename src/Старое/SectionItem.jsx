// Отображает блоки под поисковой строкой

import HeaderSectionItem from './HeaderSectionItem';
import React from "react";

function SectionItem({ data, children }) {
  const Component = 'span';
  let symb;
  if (children === "Посещаемое") {
    symb = ' - ';
  } else if (children === "Телепрограмма") {
    symb = '   ';
  }

  return (
    <div className="section-item">
      <HeaderSectionItem>{children}</HeaderSectionItem>
      <div className="section-list">
        {data.type.map((a,i) => <div className="section-text" key={i}><Component className={data.class}>{a.key[0]}</Component>{symb}<Component>{a.key[1]}</Component></div>)}
      </div>
    </div>
  );
}
                
export default SectionItem;
