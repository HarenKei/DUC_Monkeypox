import React, {useEffect, useState} from 'react';
import world from '../../Sources/Map/world.json';
import { VectorMap } from '@south-paw/react-vector-maps';
import styled, {css} from 'styled-components';
import "./Map.css";
import ExamData from '../../Sources/example.json';
import "./Map.css";



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
        width:920px;
        margin:30px;

        svg{
<<<<<<< HEAD
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
=======
            stroke: #fff;
            path{
                fill: grey;
                cursor: pointer;
                outline: none;
                &[id="ru"]{
                    fill : red;
                }
                &[id="us"]{
                    fill : red;
                }
                &:hover {
                  fill: pink;
                  &[id="ru"]{
                    fill: pink;
                }
                }
                path{
                    &[id="ru"]{
                        
                    }
                    
>>>>>>> 44337212791c91f4616cb71b7f45063b5d766ad8
                }
            }
        }
   `;
<<<<<<< HEAD
   const [current, setCurrent] = useState(null);
   const [hovered, setHovered] = useState('None');
=======

    const style = { margin: '1rem auto', width: '300px'};
    const [current, setCurrent] = useState(null);
   

    const [hovered, setHovered] = useState('None');
    const [color, setColor] = useState('grey');
>>>>>>> 44337212791c91f4616cb71b7f45063b5d766ad8

    const layerProps = {
        onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
        onMouseLeave: ({ target }) => setHovered('None')

    };

    const checkedLayersProps = items.id;

    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    
<<<<<<< HEAD
=======
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    
>>>>>>> 44337212791c91f4616cb71b7f45063b5d766ad8
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