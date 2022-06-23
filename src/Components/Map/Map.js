import React, {useEffect, useState} from 'react';
import world from '../../Sources/Map/world.json';
import { VectorMap } from '@south-paw/react-vector-maps';

const Map = () => {
    const style = { margin: '1rem auto', width: '50%'};
   
    

    const [hovered, setHovered] = useState('None');
    const [focused, setFocused] = useState('None');
    const [clicked, setClicked] = useState('None');
    const [color, setColor] = useState('red');

    const layerProps = {
        onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
        onMouseLeave: ({ target }) => setHovered('None'),
        onFocus: ({ target }) => setFocused(target.attributes.name.value),
        onBlur: ({ target }) => setFocused('None'),
        onClick: ({ target }) => setColor("blue"),
    };

    console.log(color);
    

    return(
        <div style={style}>
            <VectorMap {...world} layerProps={layerProps}/>
            <hr />
            <p>Hovered: {hovered && <code>{hovered}</code>}</p>
            <p>Focused: {focused && <code>{focused}</code>}</p>
            <p>Clicked: {color && <code>{color}</code>}</p>
        </div>
    )
}

export default Map;