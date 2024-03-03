import "./../App.css"
import Logo from "./Logo"
import Title from "./body/Title"
import New from "./header/New";
import Header from "./header/Header";
export default function Main() {
    return (
      <>
        <div className="row title">
          <Title size="main-small" title="Видео" />
          <Title size="main-small" title="Картинки" />
          <Title size="main-small" title="Новости" />
          <Title size="main-small" title="Карты" />
          <Title size="main-small" title="Маркет" />
          <Title size="main-small" title="Переводчик" />
          <Title size="main-small" title="Эфир" />
          <Title size="main-small" title="ещё" />
        </div>
        <div className="row search">
          <Logo />
          <div className="column">
            <input
              className="search-input"
              id="search-input"
              type="text"
              name="search-input"
              required
            />
            <New id="8976967" classNames="label">
              Найдется всё. Например,{" "}
              <span className="label-example">фаза Луны сегодня</span>
            </New>
          </div>
          <button className="search-button" type="submit">
            Найти
          </button>
        </div>
        <div className="row">
          <img className="banner" src="https://loremflickr.com/650/70" alt="" />
        </div>
        <div className="row title">
          <div className="column">
            <Header size="main-big" title="Погода" />
            <div className="row">
              <img
                className="picture"
                src="https://loremflickr.com/40/40"
                alt=""
              />
              <New id="2385794" classNames="new">
                Утром +17 С<br />
                днем +20 С
              </New>
            </div>
            <Header size="main-big" title="Посещаемое" />
            <New id="9879781" classNames="new">
              <span className="bold">Недвижимость</span> - о сталинках
            </New>
            <New id="9879782" classNames="new">
              <span className="bold">Маркет</span> - люстры и светильники
            </New>
            <New id="9879783" classNames="new">
              <span className="bold">Авто.ру</span> - привод 4х4 до 500000
            </New>
          </div>
          <div className="column">
            <Header size="main-big" title="Карта Германии" />
            <New id="9879784" classNames="new">
              Расписания
            </New>
          </div>
          <div className="column">
            <Header size="main-big" title="Эфир" />
            <New id="9879784" classNames="new">
              <img
                className="logoNews"
                src="https://loremflickr.com/16/16"
                alt=""
              />
              <span className="bold">Управление как искусство</span>
              <span className="label-example"> Успех</span>
            </New>
            <New id="9879784" classNames="new">
              <img
                className="logoNews"
                src="https://loremflickr.com/16/16"
                alt=""
              />
              <span className="bold">Ночь. Мир в это время</span>
              <span className="label-example"> earthTV</span>
            </New>
            <New id="9879784" classNames="new">
              <img
                className="logoNews"
                src="https://loremflickr.com/16/16"
                alt=""
              />
              <span className="bold">Андрей Возн...</span>
              <span className="label-example"> Совершенно секретно</span>
            </New>
          </div>
        </div>
      </>
    );
}
