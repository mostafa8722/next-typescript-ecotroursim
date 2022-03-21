import React, { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, MapConsumer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
//import { locationSet } from "../store/actions/user";
import { useDispatch } from "react-redux";

interface Props {
    draggable: boolean;
    location: { lat: number; lng: number };
    showDragabelMarker: boolean;

    width: string;
    height: string;
    onMarkerDragEnd?: (a: any) => void;
}

const CustomMap = (props: Props) => {
    const [map, setMap] = useState<L.Map | null>(null);
    const markerRef = useRef<any>(null);

    const dispatch = useDispatch();
    var LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: "leaf-shadow.png",
            iconSize: [34, 60],
            iconUrl: "/images/marker.svg",
        },
    });
    var myIcon = new LeafIcon();

    const eventHandlers = useMemo(
        () => ({
            dragend() {
                if (props.onMarkerDragEnd && markerRef.current) {
                    props.onMarkerDragEnd(markerRef?.current?.getLatLng());
                }
            },
        }),
        [props]
    );

    useEffect(() => {
        map?.setView({ lat: props.location.lat, lng: props.location.lng }, 20);
    }, [map, props.location]);

    return (
        <MapContainer
            center={[props.location.lat, props.location.lng]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: props.width, height: props.height, borderRadius: 15 }}
            whenCreated={setMap}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {props.showDragabelMarker && (
                <Marker
                    icon={myIcon}
                    position={[props.location.lat, props.location.lng]}
                    draggable={props.draggable}
                    eventHandlers={eventHandlers}
                    ref={markerRef}
                ></Marker>
            )}
            <MapConsumer>
                {(map) => {
                    map.on("click", (e: any) => {
                        const { lat, lng } = e.latlng;
                        let data = {
                            lat: lat,
                            lng: lng,
                            address: "",
                        };
                        dispatch(locationSet(data));
                    });
                    return null;
                }}
            </MapConsumer>
        </MapContainer>
    );
};

export default CustomMap;
