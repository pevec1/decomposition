import "./../App.css"
import logo from './../Yandex_logo_2021_Russian.svg.png'
export default function Logo() {
    return (
        <div>
            <img className='logo' src={logo} alt="" />
        </div>
    )
}