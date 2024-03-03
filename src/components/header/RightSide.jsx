import "./../../App.css"
import New from "./New"
export default function RightSide() {
    return (
        <div className="column">
          <New key="6" classNames="right-side">
            <img
              className=""
              src="https://loremflickr.com/100/100"
              alt=""
            />
            <h3 className="workerror">Работа над ошибками</h3>
            Смотрите на Яндексе и запоминайте
          </New>
     </div>
    );
}
