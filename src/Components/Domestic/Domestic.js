import React from "react";
import Graph from "../Graph/Graph";
import "./Domestic.css";
import Data from "../../testData";


const Domestic = () => {
    var countCnt = 0;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();

    const newArrayData = Data.map((item, index) => {
        countCnt += item.count;
      });

    return(
        <div id = "root_domestic">
            <p id="main_title">국내 확진 현황</p>
            <p id="sub_title">Confirmed Cases(South Korea)</p>
            <div id="domestic_box">
                <p>누적 확진자 : {countCnt}명</p>
                <p>금일 확진자 : {Data[Data.length-1].count}명</p>
                <p>({year}.{month}.{day} 기준)</p>
                <Graph/>
            </div>
        </div>
    )
}

export default Domestic;