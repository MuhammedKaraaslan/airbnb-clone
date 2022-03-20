import React, { useState } from 'react'

import ReactMapGL, { Marker, Popup } from 'react-map-gl'; //Source: https://github.com/visgl/react-map-gl

import getCenter from 'geolib/es/getCenter'; //Source: https://www.npmjs.com/package/geolib

import 'mapbox-gl/dist/mapbox-gl.css';

function LocationMap({ searchResults }) {
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }))

    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })

    const [selectedLocation, setSelectedLocation] = useState({});

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/muhammedkaraaslan/cl0yy9egj00fg14mdo5fbdbtu'
            mapboxAccessToken='pk.eyJ1IjoibXVoYW1tZWRrYXJhYXNsYW4iLCJhIjoiY2wweXk2M2RuMXlieDNqbjVrM2l6bnkwNCJ9.ZfoR1O2Nm9M423FjSbFlaA'
            {...viewport}
            onMove={evt => setViewport(evt.viewport)}
        >
            {
                searchResults.map((result) => (
                    <div key={result.long}>
                        <Marker
                            longitude={result.long}
                            latitude={result.lat}
                            offsetLeft={-20}
                            offsetTop={-10}
                        >
                            <p
                                onClick={() => setSelectedLocation(result)}
                                className='cursor-pointer text-2xl animate-bounce'
                                aria-label='push-pin'
                                role='img'
                            >
                                📌
                            </p>
                        </Marker>



                        {selectedLocation.long === result.long
                            ? (
                                <Popup
                                    closeOnClick={false}
                                    latitude={result.lat}
                                    longitude={result.long}
                                >
                                    <div className='px-3 text-red-400 text-lg'>
                                        <p>{result.title}</p>
                                        <p>{result.price}</p>
                                    </div>
                                </Popup>
                            )
                            : (false)}
                    </div>
                ))
            }
        </ReactMapGL>
    )
}

export default LocationMap