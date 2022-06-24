import React from 'react';
import Map from '../Map/Map';
import '../Overseas/Overseas.css';

const Overseas = () => {
    return(
        <div id = "root_overseas">
            <p id="overseas_main_title">세계 확진 현황</p>
            <p id="overseas_sub_title">Confirmed Cases(Global)</p>
            <div id="overseas_box">
                <Map/>
            </div>
        </div>
    )
}

export default Overseas;