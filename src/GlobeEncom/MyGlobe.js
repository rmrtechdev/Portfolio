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
            waveColor: "#FF69B4",
            coreColor: "red",
            shieldColor: "green",
            numWaves: 17
        };

        setConstellations([{ opts, sats: constellation }]);
    }, [myData]);
    console.log(myData)
    



    var data = [{
        lat:  40.730610,
        lng: -73.935242,
        label: "New York"
      }, {
        lat: 25.77427,
        lng: -80.19366,
        label: "Miami"
      }, {
        lat: 37.77493,
        lng: -122.41942,
        label: "San Francisco"
      }, {
        lat: -23.5475,
        lng: -46.63611,
        label: "Sao Paulo"
      }, {
        lat: -12.04318,
        lng: -77.02824,
        label: "Lima"
      }, {
        lat: 21.30694,
        lng: -157.85833,
        label: "Honolulu"
      }, {
        lat: -31.95224,
        lng: 115.8614,
        label: "Perth"
      }, {
        lat: -33.86785,
        lng: 151.20732,
        label: "Sydney"
      }, {
        lat: -42,
        lng: 174,
        label: "New Zealand"
      }, {
        lat: 22.28552,
        lng: 114.15769,
        label: "Hong Kong"
      }, {
        lat: 19.07283,
        lng: 72.88261,
        label: "Mumbai"
      }, {
        lat: 30.06263,
        lng: 31.24967,
        label: "Cairo"
      }, {
        lat: -33.92584,
        lng: 18.42322,
        label: "Cape Town"
      }, {
        lat: 52.52437,
        lng: 13.41053,
        label: "Berlin"
      }, {
        lat: 55.95206,
        lng: -3.19648,
        label: "Edinburgh"
      }, {
        lat: 55.75222,
        lng: 37.61556,
        label: "Moscow"
      }];


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
                            limit: 99
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
        <div className='globe-container'>
        <div className="globe-wrapper">
        <h1 className="globe-header">
          <div>
                <span>S</span>
                <span>p</span>
                <span>a</span>
                <span>c</span>
                <span>e</span>
                <span>s</span>
                <span>h</span>
                <span>i</span>
                <span>p</span>
                </div>
            <div className="wrapper">
              <span>E</span>
                <span>a</span>
                <span>r</span>
                <span>t</span>
                <span>h</span>
            </div>
               
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
                baseColor: "#08fdd8",
                pinColor: "#DAA520",
                viewAngle: 0.3,
                data: data
            }}
        />
        
        </div>
    );
}
