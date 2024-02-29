//import React from 'react';
import Header from "./Header";
import Time from "./Time";
import News from "./News";

export default function Headers(){
    return (
        <>
        <div className="column">
            <div className="row">
        <Header size="header-big" title="Сейчас в СМИ" />
        <Header size="header-big" title="в Германии"/> 
        <Header size="header-big" title="Рекомендуем"/>
        <Time />
        </div>
        </div>
        <div className="column">
            <div className="row">
                <News />
            </div>
        </div>
    </>
    )
}