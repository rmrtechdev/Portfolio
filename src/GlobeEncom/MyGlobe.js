import React, { useEffect, useState } from 'react';
import { EncomGlobe } from 'encom-globe-react';
import 'encom-globe-react/dist/index.css';
import './myglobe.css';



const marker1 = { lat: 49.25, lon: -123.1, label: "Vancouver" };
const marker2 = { lat: 35.6895, lon: 129.69171, label: "Tokyo", connected: true };
const demoMarkers = [marker1, marker2];



export default function MyGlobe() {
    const [myData, setMyData] = useState([]);
    const [constellations, setConstellations] = useState([]);

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



    


    useEffect(() => {
       
        const constellation = myData.map(item => ({
            lat: item.latitude,
            lon: item.longitude,
            altitude: 1.3
        }));

        const opts = {
            waveColor: "#FFF",
            coreColor: "yellow",
            shieldColor: "gold",
            numWaves: 18
        };

        setConstellations([{ opts, sats: constellation }]);
    }, [myData]);



    const demo = () => {
    
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.spacexdata.com/v4/starlink/query', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        query: {
                            height_km: {
                                $ne: null,
                            },
                        },
                        options: {
                            select: ['latitude', 'longitude', 'height_km'],
                            pagination: true,
                            lean: true,
                        },
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                   
                    setMyData(data.docs);
                 
                } else {
                    console.error('Error fetching data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
    
        fetchData();    
    }

    return (
        <div className='work-container'>
        <div className="globe-wrapper">
        <h1 className="globe-header">
                <span>S</span>
                <span>p</span>
                <span>a</span>
                <span>c</span>
                <span>e</span>
                <span>s</span>
                <span>h</span>
                <span>i</span>
                <span>p&nbsp;</span>
                
                <span>E</span>
                <span>a</span>
                <span>r</span>
                <span>t</span>
                <span>h</span>
                
        </h1>
        <p className="globe-description">
            <span>A&nbsp;</span>
            <span>sample&nbsp;</span>
            <span>snippet&nbsp;</span>
            <span>of&nbsp;</span>
            <span>SpaceX&nbsp;</span>
            <span  onClick={() => {
            window.location.href = 'https://www.starlink.com';
            return null;}}> Starlink </span>
            <span>&nbsp;satellites&nbsp;</span>
            <span>flying&nbsp;</span>
            <span>through&nbsp;</span>
            <span>low&nbsp;</span>
            <span>earth&nbsp;</span>
            <span>orbit.&nbsp;</span>
            
           
           
        </p>
        </div>


            <EncomGlobe 
            width={state.width}
            height={state.height}
            constellations={constellations}
           globeReadyCb={demo}
            globeConfig={{
                ...EncomGlobe.defaultProps.globeConfig,
                baseColor: "#00e6e6",
                pinColor: "#FF69B8",
                viewAngle: 0.3
            }}
        />
        
        </div>
    );
}
