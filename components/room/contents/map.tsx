import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";

const CustomMap = dynamic(() => import("../../../app/customMap"), {
    ssr: false,
});

const Map = ()=>{

    return (
        <>

            <Box className="mr-10 mt-2 mb-10">
                <Typography className={`text-xl font-bold   mt-5 mb-5 `} variant="h2" component="h2" >
                        نقشه
                    </Typography>
                    <Box className="flex">
                        
                    <CustomMap
                                width={1 ? "100%" : "100%"}
                                height={1 ? "300px" : "300px"}
                                // location={{ lat: props.lat ? props.lat : 35.6992, lng: props.lng ? props.lng : 51.353 }}
                                location={{
                                    lat: 35.6992,
                                    lng: 51.353,
                                }}
                                draggable={true}
                                showDragabelMarker={true}
                              //  onMarkerDragEnd={(d) => setLocation({ lat: d.lat, long: d.lng })}
                            />
                    </Box>
            </Box>

        </>
    )
}
export default Map;
