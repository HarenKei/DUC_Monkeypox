import React, {useEffect, useState} from 'react';
import world from '../../Sources/Map/world.json';
import { VectorMap } from '@south-paw/react-vector-maps';
import styled from 'styled-components';
import ExamData from '../../Sources/example.json';
import "./Map.css";

const natlData = ExamData.map((item, index) => {
  
  });

const Map = () => {
    
   const Map = styled.div`
        width:920px;
        margin:30px;

        svg{
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
                    
                }
            }

            
            
            
        }
   `;

    const style = { margin: '1rem auto', width: '300px'};
    const [current, setCurrent] = useState(null);
   

    const [hovered, setHovered] = useState('None');
    const [color, setColor] = useState('grey');

    const layerProps = {
        onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
        onMouseLeave: ({ target }) => setHovered('None'),
        onClick: ({ target }) => setColor("blue"),
    };
    
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