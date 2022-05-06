import Divider from '@mui/material/Divider';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import {styleInput,CustomButton} from "../../../logic/css/style"

const Order = ()=>{
  return (
      <>
          <Box className="grid grid-cols-12 mt-2 mb-2" >
                     <Typography className={`  col-span-1 text-center `} component="span">
                        1
                     </Typography>
                     <Typography className={` col-span-3 text-center `} component="span">
                       عنوان 
                     </Typography>
                     <Typography className={`   col-span-3 text-center `} component="span">
                        تاریخ 
                     </Typography>
                     <Typography className={` col-span-3 text-center`} component="span">
                       مبلغ 
                     </Typography>
                     <Box className={`col-span-2 text-center flex`} component="span">
                        <Box className="mt-3 ml-2">
                        <Link href="/">
                            <a className="text-blue-800 font-bold " >
                                مشاهده 
                            </a>
                        </Link>
                        </Box>
                       <Box>
                       <CustomButton  orderPage={"false"} before={false} style={{padding:"5px 10px",bg:"#ff2200",height:"40px",width:"50px",top:"0px"}}>حذف </CustomButton>

                       </Box>
                     </Box>
                  </Box>
                  <Divider/>
      </>
  )
}
export default Order;