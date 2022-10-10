import ListRecom from './ListRecom';
import ListNews from './ListNews';
import ListSearch from './ListSearch';
import Search from './Search';
import SectionItem from './SectionItem';
import SectionPog from './SectionPog';
import SectionMap from './SectionMap';
import SectionEf from './SectionEf';
import new24 from './24.jpg';
import ria from './ria.jpg';
import tass from './tass.png';
import yandex from './yandex.jpg';
import play from './play.png';
import weather from './weather.png';

function Decomp() {
  const news = {
    type: 'news',
    news: [
      {icon: new24, news: 'Путин упростил получение автомобильных номеров'},
      {icon: ria, news: 'В команде Зеленского раскрыли план реформ на Украине'},
      {icon: tass, news: 'Турпомощь прокомментировала гибель десятков россиян в Анталье'},
      {icon: new24, news: 'Суд закрыл дело Демпартии США для России'},
      {icon: ria, news: 'На Украине призвали создать ракеты'}
    ]
  }

  const listSearch = {
    type: 'info',
    list: ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'Еще']
  }

  const dataPog = {
    icon: weather,
    pogDay: '+20',
    pogNow: '+17'
  }

  const dataPos = {
    class: 'pos',
    type: [
      {key: ['Недвижимость', 'о сталинках']},
      {key: ['Маркет', 'люстры и светильники']},
      {key: ['Авто.ру', 'привод 4х4 до 500 000']}
    ]
  }
  
  const dataTel = {
    class: 'tel',
    type: [
      {key: ['02:00', 'ТНТ. Best']},
      {key: ['02:15', 'Джинглики']},
      {key: ['02:25', 'Наедине со всеми']}
    ]
  }

  const dataEf = [
    {key: [play, 'ТНТ. Best']},
    {key: [play, 'Джинглики']},
    {key: [play, 'Наедине со всеми']}
  ]

  return (
    <>
      <ListRecom />
      <ListNews {...news}/>
      <ListSearch {...listSearch}/>
      <Search icon={yandex}/>
      <div className="section">
        <SectionPog data={dataPog}>{"Погода"}</SectionPog>
        <SectionItem data={dataPos}>{"Посещаемое"}</SectionItem>
        <SectionMap>{"Карта России"}</SectionMap>
        <SectionItem data={dataTel}>{"Телепрограмма"}</SectionItem>
        <SectionEf data={dataEf}>{"Эфир"}</SectionEf>
      </div>
    </>
  );
}
            
export default Decomp;