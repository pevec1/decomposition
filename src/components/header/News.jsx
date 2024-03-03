import "./../../App.css"
import logo1 from './../../img/ria.png';
import logo2 from "./../../img/ria.png";
import logo3 from "./../../img/ria.png";
import logo4 from "./../../img/ria.png";
import logo5 from "./../../img/ria.png";
import New from './New'
export default function News() {
    const childs = [{
        id: 1,
        classNames: 'new',
        title: "Путин упростил получение автомобильных номеров"
    },
{        id: 2,
    classNames: 'new',
        title: "В команде Зеленского раскрыли план реформ на Украине"
},
{        id: 3,
    classNames: 'new',
        title: "«Турпомощь» прокомментировала гибель десятков россиян в Анталье"
},
{        id: 4,
    classNames: 'new',
        title: "Суд закрыл дело Демпартии США против России"
},
{        id: 5,
    classNames: 'new',
        title: "На Украине призвали создать ракеты для удара по Москве"
}
]
    const image = [
        logo1, logo2, logo3, logo4, logo5]
return(
    childs.map((child, index) =>
            <New key={child.id} classNames={child.classNames}>
            <img className="logoNews" src={image[index]} alt="" />
            {child.title}
            </New>
    ))
    
}