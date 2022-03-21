import Box from "@mui/material/Box";
import Slider from "./sliders/slider"
import Contents from "./contents/contents"



const Room = ()=>{
    return (
        <>
        <Box className="grid  ">
        <Box>
          <Slider  />
        </Box>
        <Box>
          <Contents  />
        </Box>

        </Box>

            
        </>
    )
}
export default Room;