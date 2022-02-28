import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from 'next/image'
import Link from "next/link"
import customStyles from "../../../styles/Style.module.css"


interface Props { 
    id:string,
    src:string,
    title:string,
}

const City = (props:Props)=>{
    const {src,title,id} = props;
    return (
        <>
        <Box className={` ${customStyles["home-city-show"]}`} >
           <Link  href="/">
                <a   >
                            {src?    <Image
               
              src={src}
              alt="کومه گردی"
              width={180}
              height={200}
          />: <></>}    
          <Typography className="text-xl mt-2 mb-0 text-center" variant="h2" component="h2" >
             {title}

          </Typography>
                               
                </a>

          </Link>
       


        </Box>
        </>
    )


}
export default City;