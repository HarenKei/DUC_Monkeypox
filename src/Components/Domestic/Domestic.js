import React from "react";
import { VectorMap } from "@south-paw/react-vector-maps";
import korea from '../../rok.json';

const Domestic = () => {
    return(
        <div>
            <h1>Domestic Component</h1>
            <VectorMap {...korea}/>
        </div>
    )
}

export default Domestic;