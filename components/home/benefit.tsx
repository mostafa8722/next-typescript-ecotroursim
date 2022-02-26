import React from "react"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import customStyles from "../../styles/Style.module.css"
import Image from 'next/image'

interface Props { 

    src:string,title:string,body:string
}
const Benefit = (props:Props)=>{

    const {src,title,body}  = props ;
    
    return (
    
    <>
    <Box className={`flex flex-col mt-2 ${customStyles["box-benefit"]}`}>
{src?    <Image
    src={src}
      alt="کومه گردی"
      width={50}
      height={50}
    />: <></>}
 
    <Typography className="text-xl mt-2 text-center" variant="h2" component="h2" paragraph={true}>
    {title}

    </Typography>

    <Typography className="text-base mt-3 text-center" variant="h2" component="p" paragraph={true}>
   {body}

    </Typography>

    </Box>
    </>
        )

}
export default Benefit;