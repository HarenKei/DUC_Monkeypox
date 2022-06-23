import React, {useState} from 'react';
import world from '../../Sources/Map/world.json';
import { VectorMap } from '@south-paw/react-vector-maps';

const Map = () => {
    const style = { margin: '1rem auto', width: '300px'};

    const [hovered, setHovered] = useState('None');
    const [focused, setFocused] = useState('None');
    const [clicked, setClicked] = useState('None');

    const layerProps = {
        onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
        onMouseLeave: ({ target }) => setHovered('None'),
        onFocus: ({ target }) => setFocused(target.attributes.name.value),
        onBlur: ({ target }) => setFocused('None'),
        onClick: ({ target }) => setClicked(target.attributes.name.value),
    };

    return(
        <div style={style}>
            <VectorMap {...world} layerProps={layerProps}/>
            <hr />
            <p>Hovered: {hovered && <code>{hovered}</code>}</p>
            <p>Focused: {focused && <code>{focused}</code>}</p>
            <p>Clicked: {clicked && <code>{clicked}</code>}</p>
        </div>
    )
}

export default Map;