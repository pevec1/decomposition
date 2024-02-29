import "./../App.css"
import logo1 from './../ria.png'
import logo2 from './../ria.png'
import logo3 from './../ria.png'
import logo4 from './../ria.png'
import logo5 from './../ria.png'
import New from './New'
export default function News() {
    const childs = [{
        id: 1,
        classNames: 'new',
        title: "Новость"
    },
{        id: 2,
    classNames: 'new',
        title: "Новость"
}
]
    const image = [
        logo1, logo2, logo3, logo4, logo5]

    childs.map((child, index) => {return(
            <New key={child.id} className={child.classNames}>
            <img className="logoNews" src={image[index]} alt="" />
            {child.title}
            </New>
    )})
    
}