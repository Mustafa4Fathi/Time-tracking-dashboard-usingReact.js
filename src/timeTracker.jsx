import React from "react";
import UserInfo from "./components/userInfo/userInfo";
import Time from "./components/time/time";
import TabContent from "./components/tabContent/tabContent";

const TimeTracker = ()=>{
    return(
        <div className="timeTracker">
            <div className="timeList">
                <UserInfo />
                <Time />
            </div>
            <div className="tracker tabContainer">
                <TabContent tab="daily" className="tabContent active"/>
                <TabContent tab= "weekly" className="tabContent"/>
                <TabContent tab="monthly" className="tabContent"/>
            </div>
        </div>
    );
}

export default TimeTracker;