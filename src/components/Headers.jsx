//import React from 'react';
import Header from "./header/Header";
import Time from "./header/Time";
import News from "./header/News";
import RightSide from "./header/RightSide";
import Rates from "./header/Rates";

export default function Headers() {
  return (
    <>
      <div className="column">
        <div className="row">
          <Header size="header-big" title="Сейчас в СМИ" />
          <Header size="header-big" title="в Германии" />
          <Header size="header-big" title="Рекомендуем" />
          <Time />
        </div>

        <div className="row">
          <div className="column">
            <News />
            <div className="row">
                <Rates />
            </div>
          </div>
          <div className="column">
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
}
