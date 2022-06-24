import React, {useEffect, useState} from 'react';
import world from '../../Sources/Map/world.json';
import { VectorMap } from '@south-paw/react-vector-maps';
import styled, {css} from 'styled-components';
import "./Map.css";
import ExamData from '../../Sources/example.json';



const Map = () => {
    const countryData = ExamData.map((item, index) => {
        return(
            <li key = {index}>
                {item.name}({item.id}) in {item.accure}
            </li>
        );
    });
    
    
    let items = Object.values(ExamData);
    var countryLength = items.length;
   
    
   const Map = styled.div`
        margin: 1rem auto;
        width: 820px;

        svg{
            stroke: #000;

            path {
                fill: grey;
                cursor: pointer;
                outline: none;

                &[aria-checked='true']{
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

    const checkedLayersProps = items.id;

    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    
    return(
        <div id="map">
            <p>전세계 누적 확진자: 0명</p>
            <p>{hovered && <code>{hovered}</code>} 누적 확진자: {0}명</p>
            <p>({year}.{month}.{day} 기준)</p>
            <Map>
                <VectorMap {...world} layerProps={layerProps} currentLayers={[current]} />
            </Map>           
        </div>
    )
}

export default Map;