import React, {useEffect, useState} from 'react';
import world from '../../Sources/Map/world.json';
import { VectorMap } from '@south-paw/react-vector-maps';
import styled, {css} from 'styled-components';

import ExamData from '../../Sources/example.json';



const Map = () => {
    const countryData = ExamData.map((item, index) => {
        return(
            <li key = {index}>
                {item.name}({item.id}) in {item.accure}
            </li>
        );
    });
    


    function forItem(items){
        for(var i = 0; i < items.length; i++){
            return(css`
                    &[id="${items[i].id}"]{
                        fill:red;
                    }
            `);
        }
    }
    
    let items = Object.values(ExamData);
    var countryLength = items.length;
   
    
   const Map = styled.div`
        margin: 1rem auto;
        width: 500px;

        svg{
            stroke: #000;

            path {
                fill: grey;
                cursor: pointer;
                outline: none;

                &[id="gb"]{
                    fill:red;
                }
                &[id="pt"]{
                    fill:red;
                }
                &[id="us"]{
                    fill:red;
                }
          
                &:hover {
                  fill: pink;
                }
            }
        }
   `;
   const [current, setCurrent] = useState(null);
   const [hovered, setHovered] = useState('None');

    const layerProps = {
        onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
        onMouseLeave: ({ target }) => setHovered('None')
    };
    
    return(
        
        <div>
            <p>Hovered: {hovered && <code>{hovered}</code>}</p>
            <Map>
                <VectorMap {...world} layerProps={{layerProps}} />
            </Map>           
      
        </div>
    )
}

export default Map;