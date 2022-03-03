import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link"
import { makeStyles } from '@mui/styles';
import {icon} from "../../../utils/icons"

interface Props { 
    id:string,
    title :string,
    description :string,
    src :string,
}

const Banner = (props:Props)=>{
    const {id,title,description,src} = props
    const useStyles = makeStyles({
        bg: {
            background: `url(${src})` ,
            height:200,
            width:"100%",
            borderRadius:20,
            margin:"5px 10px", 
            direction:"rtl"
        },
        title:{ 
            borderBottom : "2px solid #ff2200"
        }
       
    });
    const classes = useStyles();
    return (
        <>
        
        <Box className="flex w-1/2 " >
        <Link  href="/">
                <a   className={classes.bg} 
                   >
                          
          <Typography className={`text-xl mt-5 mr-10 inline-block leading-10 mb-0 text-center text-white ${classes.title}`} variant="h2" component="h2" >
             {title}

          </Typography>

           <Typography className="text-base  mr-10   flex mt-5 mb-0 text-center text-white" variant="h2" component="p" paragraph={true} >
             {description}

           </Typography> 

                <Box className="flex mr-10 mt-4">
                <Typography className="text-base mt-2 mb-0 text-center text-white" variant="h4" component="h4" >
           مشاهده

          </Typography> 
          <Box className="flex mt-2 mr-2">
                        {icon("arrowLeft",{fontSize:"20px",height:"20px",color:"5bf209"})}
                        {icon("arrowLeft",{fontSize:"20px",height:"20px",color:"43ad26"})}
                        {icon("arrowLeft",{fontSize:"20px",height:"20px",color:"43ad26"})}
          </Box>
                </Box>    
                </a>



          </Link>
        </Box>
      </>
    )

}
export default Banner;