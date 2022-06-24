import React, {useEffect, useState} from 'react';
import world from '../../Sources/Map/world.json';
import { VectorMap } from '@south-paw/react-vector-maps';
import styled, {css} from 'styled-components';
import "./Map.css";
import ExamData from '../../Sources/example.json';



const Map = () => {
    let items = Object.values(ExamData);
    var accure = 0;

    for(var i = 0; i < items.length; i++){
        accure += items[i].accure;
    }

    const countryData = ExamData.map((item, index) => {
        return(
            <li key = {index}>
                {item.name}({item.id}) in {item.accure}
            </li>
        );
    });
    
   const Map = styled.div`
        margin: 1rem auto;
        width: 820px;

        svg{
            stroke: #000;

            path {
                fill: grey;
                cursor: pointer;
                outline: none;

                &[aria-checked="true"]{
                    fill:red;
                }
          
                &:hover {
                  fill: orange;
                }
            }
        }
   `;
   const [current, setCurrent] = useState(null);
   const [hovered, setHovered] = useState('');
   const [hoverId, setHoverId] = useState('None');


    const layerProps = {
        onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
        onMouseEnter: ({ target }) => setHoverId(target.attributes.id.value),
        onMouseLeave: ({ target }) => setHovered('None')

    };

    const accureCountry = () => {
        var num;
        for(let i = 0; i < items.length; i++){
            if(items[i].id == hoverId){
                num = items[i].accure;
                console.log(num);
                break;
            } else num = 0;
        }
        return num;
    }

    const nameCountry = () => {
        var str;
        for(let i = 0; i < world.length; i++){
            if(world[i].id == hoverId){
                str = world.name;
                break;
            }else str = "None";
        }
        return str;
    }
   

    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    
    return(
        <div id="map">
            <p>전세계 누적 확진자: {accure}명</p>
            <p>{nameCountry()} 누적 확진자: {accureCountry()}명</p>
            <p>({year}.{month}.{day} 기준)</p>
            <Map>
                <VectorMap {...world} layerProps={layerProps} currentLayers={[current]} />
            </Map>           
        </div>
    )
}

export default Map;