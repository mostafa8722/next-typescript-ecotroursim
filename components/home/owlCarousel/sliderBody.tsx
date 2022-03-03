import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {icon} from "../../../utils/icons"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';

import GroupIcon from '@mui/icons-material/Group';

interface Props {
    location:string,
    comment:string,
    room:string,
    capacity:string,
 }


const SliderBody = (props:Props)=>{
    const {location,comment,room,capacity} = props

    return (
        <>
          <Box className="flex flex-col">
              <Box className="flex justify-between mt-2 mr-1 ml-1">
                  <Box className="flex mr-1">
                    <LocationOnIcon style={{fontSize:16,color:"rgb(91, 242, 9)"}} />
                    <Typography className="text-sm   text-center" variant="h2" component="h3">
                       {location}

                      </Typography>
                  </Box>
                  <Box className="flex ml-1">
                  <StarIcon style={{fontSize:16,color:"#FFD700"}} />
                    <Typography className="text-base  mr-1 text-center" variant="h2" component="h3">
                       {comment}

                      </Typography>
                  </Box>
              </Box>
              <Box className="flex justify-between mt-1 mr-1 ml-2">
                  <Box className="flex mt-1 mr-1">
                  <BedroomChildIcon style={{fontSize:16,color:"rgb(91, 242, 9)"}} />
                    <Typography className="text-base   mr-1 text-center" variant="h2" component="h3">
                       {room}
                    
                      </Typography>
                      <Typography className="text-base   mr-1 text-center" variant="h2" component="h3">
                    
                        اتاق خواب
                      </Typography>
                  </Box>
                  <Box className="flex ml-1">
                  <GroupIcon style={{fontSize:16,color:"rgb(91, 242, 9)"}} />
                    <Typography className="text-base mr-1 text-center" variant="h2" component="h3">
                       {capacity}

                      </Typography>
                      <Typography className="text-base mr-1 text-center" variant="h2" component="h3">
                       نفره

                      </Typography>
                  </Box>
              </Box>
          

          </Box>
        </>
    )
}
export default SliderBody;