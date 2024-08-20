import React, { useEffect } from "react";
import Tabs from "../../JS/tabs";
import './time.css';

const Time = () => {
    useEffect(() => {
        Tabs();
    }, []);

    const changeActiveTab = (e) => {
        let tabs = document.getElementsByClassName('tab');
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
        }
        e.target.classList.add('active');
        Tabs();
    };

    return (
        <div className="time">
            <ul className="tabs">
                <li data-tab="daily" className="tab active" onClick={changeActiveTab}>daily</li>
                <li data-tab="weekly" className="tab" onClick={changeActiveTab}>weekly</li>
                <li data-tab="monthly" className="tab" onClick={changeActiveTab}>monthly</li>
            </ul>
        </div>
    );
};

export default Time;
