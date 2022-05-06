import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles"
import Divider from '@mui/material/Divider';
import Order from "./order"
const Orders = ()=>{
    const useStyles = makeStyles({
        root : {
           borderRadius :10,
           backgroundColor:"#eeeeee",
           padding : "10px 20px",
           width:"calc(100% - 300px)",
        }
    }) 
    const classes = useStyles();

    return (
        <>
          <Box className={`mt-10 mr-5 ml-5 mb-10 pb-10  ${classes.root} `}>
              <Typography className={` font-bold `} component="h2">
                  سفارشهای من 
              </Typography>
                         
              <Box  className="mt-10 ">
                  <Box className="grid grid-cols-12 mb-5" >
                     <Typography className={` font-bold col-span-1 text-center `} component="span">
                        #
                     </Typography>
                     <Typography className={`font-bold col-span-3 text-center `} component="span">
                       عنوان 
                     </Typography>
                     <Typography className={` font-bold  col-span-3 text-center `} component="span">
                        تاریخ 
                     </Typography>
                     <Typography className={`font-bold col-span-3 text-center`} component="span">
                       مبلغ 
                     </Typography>
                     <Typography className={`font-bold col-span-2 text-center`} component="span">
                        عملیات
                     </Typography>
                  </Box>
                  <Divider/>
                  <Order />
                  <Order />
                  <Order />
                  <Order />
 
                
              </Box>

          </Box>
        </>
    )

}

    export default Orders;