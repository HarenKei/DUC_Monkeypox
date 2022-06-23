import React from "react";
import Graph from "../Graph/Graph";


const Domestic = () => {
    return(
        <div>
            <h1>국내 확진 추이</h1>
            <div id = "divDomesticGraph">
                <Graph/>
            </div> {/* End of divDomesticGraph */}

            <div id = "divNumberofDomestic">
                <p>대한민국 확진 현황</p>
                <p>최근 확진일</p>
            </div>
        </div>
    )
}

export default Domestic;