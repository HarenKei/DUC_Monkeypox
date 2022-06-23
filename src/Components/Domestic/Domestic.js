import React from "react";
import Graph from "../Graph/Graph";
import "./Domestic.css";
import Data from "../../testData";


const Domestic = () => {
    var countCnt = 0;

    const newArrayData = Data.map((item, index) => {
        countCnt += item.count;
        console.log(index);
        return (
          <li key={index}>
            {item.name}({item.count})
          </li>
        );
      });

    return(
        <div id = "divDomesticWrapper">
            <h1>국내 확진 추이</h1>
            <div id = "divDomesticCount">
                <div id = "divDomesticGraph">
                    <Graph/>
                </div> {/* End of divDomesticGraph */}

                <div id = "divNumberofDomestic">
                    <p>대한민국 확진 현황</p><br/>
                    누적 : { countCnt } <br/>
                    오늘 : <br/>
                    { newArrayData }
                </div>
            </div>
        </div>
    )
}

export default Domestic;