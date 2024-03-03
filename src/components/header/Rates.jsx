import "./../../App.css"
import New from './New'
export default function Rates() {
const rates = [
  {
    id: 1,
    classNames: "rate",
    title: "usd moex",
    rate: "+0,09",
  },
  {
    id: 2,
    classNames: "rate",
    title: "eur moex",
    rate: "+0,14",
  },
  {
    id: 3,
    classNames: "rate",
    title: "нефть",
    rate: "+1.63%",
  },
];

return(
    <div className="rates">
    {rates.map((child) =>
    
            <New key={child.id} classNames={child.classNames}>
            <span className="rate-title">{child.title}</span> <span className="rate-num">{child.rate}</span>
            </New>
    )}
    </div>
    )
    
}