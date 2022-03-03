import React from "react"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import customStyles from "../../../styles/Style.module.css"
import Image from 'next/image'

interface Props { 

    src:string,title1:string,title2:string,body:string
}
const Benefit = (props:Props)=>{

    const {src,title1,title2,body}  = props ;
    
    return (
    
    <>
    <Box className={`flex flex-col mt-2 ${customStyles["box-benefit"]}`}>
{src?    <Image
    src={src}
      alt="کومه گردی"
      width={50}
      height={50}
    />: <></>}
 
    <Typography className="text-base mt-2 mb-0 text-center" variant="h2" component="h2" paragraph={true}>
    {title1}

    </Typography>
    <Typography className="text-base  text-center" variant="h2" component="h2" paragraph={true}>
    {title2}

    </Typography>

    <Typography className="text-xs leading-6 text-center" variant="h2" component="p" paragraph={true}>
   {body}

    </Typography>

    </Box>
    </>
        )

}
export default Benefit;