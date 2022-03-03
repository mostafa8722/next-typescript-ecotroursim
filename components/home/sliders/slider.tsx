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
            width: "500px",
            height:"400px",
            borderRadius: "10px",
            boxShadow: "0 10px 22px 0 rgb(0 0 0 / 19%)",
            border:" 1px solid rgba(0,0,0,.14)",
            marginRight: "50px",
            overflow: "hidden",
            cursor: "pointer",
            background:"transparent",
          },
          "&>img" :{}
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
          <Typography className="text-xl mt-2 mb-0 text-center text-white" variant="h2" component="h2" >
             {title}

          </Typography>
                               
                </a>

          </Link>
       


        </Box>
        </>
    )


}
export default City;