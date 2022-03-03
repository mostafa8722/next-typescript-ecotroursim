import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from 'next/image'
import Link from "next/link"
import customStyles from "../../../styles/Style.module.css"
import {makeStyles} from "@mui/styles"
import CustomImageViewer from "../../customImageViewer"


interface Props { 
    id:string,
    src:string,
    title:string,
}

const City = (props:Props)=>{
    const {src,title,id} = props;

      const useStyles = makeStyles({
          boxSlider:{
            position: "relative",
            width: "700px",
            height:"400px",
           
          },
          
          boxSliderTitle : {
              position: "absolute!important",
              bottom:"0px",
              left:"50%",
              width:"160px",
              backgroundColor :"#31f40b",
              borderRadius :"15px",
              padding:"10px",
              transform: "translate(-50%, -50%)"



          },
      })

       const classes = useStyles();
    return (
        <>
        
        <Box className={` ${classes.boxSlider} flex justify-center items-center`} >
           <Link  href="/">
                <a   >
                            {src? 
                            
                            
                            
                            <CustomImageViewer
                            src={src}
                            width="700px"
                            height="400px"
                            objectFit="contain"
                            onClick={() => {
                              
                            }}
                        />: <></>}    
          <Typography className={`text-xl mt-2 mb-0 text-center text-white ${classes.boxSliderTitle}`} variant="h2" component="h2" >
             {title}

          </Typography>
                               
                </a>

          </Link>
       


        </Box>
        </>
    )


}
export default City;