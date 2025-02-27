import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LocationPicker = () => {
    const mapContainerRef = useRef(null); // Reference to the map container
    const [coords, setCoords] = useState({ lat: 51.505, lng: -0.09 }); // Default to London

    useEffect(() => {
        const map = L.map(mapContainerRef.current).setView([coords.lat, coords.lng], 13);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        const marker = L.marker([coords.lat, coords.lng], { draggable: true }).addTo(map);

        marker.on("moveend", (e) => {
            const { lat, lng } = e.target.getLatLng();
            setCoords({ lat, lng });
        });

        map.on("click", (e) => {
            const { lat, lng } = e.latlng;
            setCoords({ lat, lng });
            marker.setLatLng([lat, lng]);
            console.log(`Latitude: ${coords.lat}, Longitude: ${coords.lng}`); // Fixed log statement
        });

        return () => {
            map.remove();
        };
    }, [coords]);

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="relative">
                <div
                    ref={mapContainerRef}
                    className="rounded-lg shadow-lg"
                    style={{ height: "400px" }}
                ></div>
            </div>
        </div>
    );
};

export default LocationPicker;
