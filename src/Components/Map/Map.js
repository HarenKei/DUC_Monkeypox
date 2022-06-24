import React, {useEffect, useState} from 'react';
import world from '../../Sources/Map/world.json';
import { VectorMap } from '@south-paw/react-vector-maps';
import styled from 'styled-components';
import ExamData from '../../Sources/example.json';

const Map = () => {

    console.log(ExamData);
    console.log("ExamData: ", typeof ExamData);
    console.log(ExamData);
  
    const newArrayData = ExamData.map((item, index) => {
      return (
        <li key={index}>
          {item.name}({item.accure}) from {item.id}
        </li>
      );
    });
    
   const Map = styled.div`
        margin: 1rem auto;
        width: 300px;

        svg{
            stroke: #fff;

            path{
                fill: grey;
                outline: none;
            }

            &: hover{
                path{
                    fill: red;
                    outline: none;
                }

            }
        }
   `;

   const style = { margin: '1rem auto', width: '300px'};
   const [current, setCurrent] = useState(null);
   const locations = [
       {id: 'kr', name: 'South korea'},
       {id: 'jp', name: 'Japan'},
       {id: 'cn', name: 'China'},
       {id: 'ru', name: 'Russia'},
       {id: 'ua', name: 'Ukraine'},
       {id: 'us', name: 'usa'}
   ];

    const [hovered, setHovered] = useState('None');
    const [focused, setFocused] = useState('None');
    const [color, setColor] = useState('grey');

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
            <Map>
                <VectorMap {...world} layerProps={layerProps} currentLayers={[current]} />
            </Map>           
            <p>Hover on one of these to see where it is:</p>
      <ul>
        {locations.map(({ id, name }) => (
          <li key={id}>
            <code onMouseOver={() => setCurrent(id)}>{name}</code>
          </li>
        ))}
      </ul>
            <hr />
            <p>Hovered: {hovered && <code>{hovered}</code>}</p>
            <p>Focused: {focused && <code>{focused}</code>}</p>
            <p>Clicked: {color && <code>{color}</code>}</p>
        </div>
    )
}

export default Map;