import "./../App.css"

export default function New({id, children, className }) {
    console.log( id, children, className)
    return (
        <div id={id} className={className}>
            {children}
        </div>
    )
}