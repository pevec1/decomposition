import "./../../App.css";

export default function Header({size, title}) {
    return(
        <h1 className={size}>{title}</h1>
    )
}
