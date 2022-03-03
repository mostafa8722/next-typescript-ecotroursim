import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {icon} from "../../../utils/icons"

import SellIcon from '@mui/icons-material/Sell';

interface Props {
    price:string,
   
 }


const SliderFooter = (props:Props)=>{
    const {price} = props

    return (
        <>
          <Box className="flex flex-col mt-1 mb-2 mr-2 ml-2">
             
              <Box className="flex justify-between">
                  <Box className="flex">
                  {icon("arrowLeft",{fontSize:"20px",height:"20px",color:"5bf209"})}
                    <Typography className="text-base mt-1 m text-center" variant="h2" component="h3">
                      

                      </Typography>
                  </Box>
                  <Box className="flex">
                         <SellIcon style={{fontSize:16,color:"rgb(91, 242, 9)"}} />
                    <Typography className="text-base mr-1  text-center" variant="h2" component="h3">
                       {price}

                      </Typography>
                      <Typography className="text-base   text-center" variant="h2" component="h3">
                       تومان

                      </Typography>
                  </Box>
              </Box>
          

          </Box>
        </>
    )
}
export default SliderFooter;