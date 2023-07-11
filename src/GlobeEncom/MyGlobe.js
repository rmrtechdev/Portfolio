import React, { useEffect } from 'react'

import { EncomGlobe } from 'encom-globe-react'
import 'encom-globe-react/dist/index.css'
import './myglobe.css'
import starlink1 from './starlink1.json'

const marker1 = { lat: 49.25, lon: -123.1, label: "Vancouver" };
const marker2 = { lat: 35.6895, lon: 129.69171, label: "Tokyo", connected: true };
const demoMarkers = [marker1, marker2];




export default function MyGlobe(props) {



    useEffect(() => window.scrollTo(0, 0), [])

    const initialSize = Math.min(window.outerWidth, window.outerHeight);
    const [state, setState] = React.useState({ width: initialSize, height: initialSize });
    React.useEffect(() => {

        const cb = () => {
            const newSize = Math.min(window.outerWidth, window.outerHeight);
            setState({ width: newSize, height: newSize })
        };
        window.addEventListener('resize', cb, false);

        return () => window.removeEventListener('resize', cb)
    }, []);

    const strstarlink = JSON.stringify(starlink1)
    const objD = JSON.parse(strstarlink); 

    const modifiedData = objD.slice(0, 66).map(({ _id, id, height_km, ...rest }) => ({...rest,
        altitude: height_km
    }));




    const [markers, setMarkers] = React.useState([]);
    const [constellations, setConstellations] = React.useState([]);

    const demo = () => {
        console.log("Run demo");

        
        // ADD MARKERS
        setTimeout(() => setMarkers(demoMarkers), 4000)
        
       
        
        //ADD SATELLITES
        setTimeout(() => {
           //const constellation = [];
            const opts = {
                waveColor: "#FFF",
                coreColor: "yellow",
                shieldColor: "gold",
                numWaves: 9,
                size: .6
            };

            
            const constellation = modifiedData.map((item) => ({
                 
                    
                        lat: item.latitude,
                        lon: item.longitude,
                        altitude: item.altitude/320
                    
                
            }));
/*
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 3; j++) {
                    constellation.push({
                        lat: 50 * i - 30 + 15 * Math.random(),
                        lon: 120 * j - 120 + 30 * i,
                        altitude: alt
                    });
                }
            }
            */
            
            
            setConstellations([{
                opts,
                sats: constellation
            }])
        }, 6000)
    }

    return (
        <EncomGlobe
        width={state.width}
        height={state.height}
        constellations= {constellations}
        globeReadyCb={demo}
            globeConfig={{
                ...EncomGlobe.defaultProps.globeConfig,
                baseColor: "#00e6e6",
                pinColor: "#FF69B8",
                viewAngle: .3,
               


                
            }}
    
    />
    )
}


