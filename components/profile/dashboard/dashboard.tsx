import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BoxItem from "./BoxItem"
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Orders from "../orders/orders"

 const Dashboard = ()=>{

    const [list ,setList] = useState([
     {title:"تعدادخرید ",count :10,icon :KeyboardArrowDownIcon ,color:"#ff2200" },
     {title:"تعداد پرداخت  ",count :10,icon :KeyboardArrowDownIcon  ,color:"#ff2200" },
     {title:"تعداد دنبال کننده   ",count :10,icon :KeyboardArrowDownIcon  ,color:"#ff2200" },
     {title:"تعداد دنبال شونده   ",count :10,icon :KeyboardArrowDownIcon  ,color:"#ff2200" },
    ])

    return (
        <>
         <Box className="flex w-100 flex-col ">

             <Box className="grid grid-cols-4 mt-10">
                {

                    list.map((item,index)=> <BoxItem key={index} title={item.title} color={item.color} count={item.count} Icon={item.icon} />)
                }
             </Box>
             <Box>
                 <Orders />

             </Box>
         </Box>
        </>
    )
 }
 export default Dashboard;