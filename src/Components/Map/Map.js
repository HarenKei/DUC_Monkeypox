import React, {useEffect, useState} from 'react';
import world from '../../Sources/Map/world.json';
import { VectorMap } from '@south-paw/react-vector-maps';
import styled from 'styled-components';
import ExamData from '../../Sources/example.json';

const natlData = ExamData.map((item, index) => {
  
  });

const Map = () => {
    
   const Map = styled.div`
        margin: 1rem auto;
        width: 500px;

        svg{
            stroke: #fff;

            path {
                fill: grey;
                cursor: pointer;
                outline: none;

                &[id="ru"]{
                    fill : red;
                }

                &[id="us"]{
                    fill : red;
                }
          
                // When a layer is hovered
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
   console.log(Map);

   const style = { margin: '1rem auto', width: '300px'};
   const [current, setCurrent] = useState(null);
   

    const [hovered, setHovered] = useState('None');
    const [color, setColor] = useState('grey');

    const layerProps = {
        onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
        onMouseLeave: ({ target }) => setHovered('None'),
        onClick: ({ target }) => setColor("blue"),
    };
    
    console.log(hovered);
    return(
        <div style={style}>
            <Map>
                <VectorMap {...world} layerProps={layerProps} currentLayers={[current]} />
            </Map>           
      <ul>
    
      </ul>
            <hr />
            <p>Hovered: {hovered && <code>{hovered}</code>}</p>
        </div>
    )
}

export default Map;