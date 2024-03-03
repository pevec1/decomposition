import "./../../App.css"

export default function New({id, children, classNames }) {
    console.log( id, children, classNames)
    return (
        <div className={classNames}>
            {children}
        </div>
    )
}