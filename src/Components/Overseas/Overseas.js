import React from 'react';
import Map from '../Map/Map';
import '../Overseas/Overseas.css';

const Overseas = () => {
    return(
        <div>
            <h1>
                해외 확진 정보 
            </h1>
            <p>밝게 표시된 국가는 원숭이 두창 확진자가 발생한 국가입니다.</p>
            <p>마우스를 올리면 해당 국가의 원숭이 두창 누적 확진자 수를 볼 수 있습니다.</p>
            <Map/>
            
        </div>
    )
}

export default Overseas;