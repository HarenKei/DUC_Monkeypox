import React from 'react';
import world from '../../Map/world.json';
import { VectorMap } from '@south-paw/react-vector-maps';

const Overseas = () => {
    return(
        <div>
            <h1>
                해외 원숭이 두창 정보 
            </h1>
            <VectorMap {...world}/>
        </div>
    )
}

export default Overseas;