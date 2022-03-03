import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import {makeStyles} from "@mui/styles";


const Title = ()=>{
    const useStyles = makeStyles({
      link: {
         border:"1px solid #ed1459"  ,
         borderRadius:"20px",
         color: "#ed1459"

        }
       
    });
    const classes = useStyles();
 
    return (
        <>

            <Box className="flex justify-between">
                <Box className="flex flex-col mr-10">

                    
                    <Typography className="text-xl font-bold mt-2 mb-0 text-ce" variant="h2" component="h2" >
                    اقامتگاهای آنی 

                    </Typography>

                    <Typography className="text-sm mt-2 mb-0 text-cent" variant="h2" component="p" paragraph={true} >
                    اقامتگاه‌هایی که برای رزرو نیاز به تایید میزبان ندارند

                    </Typography>

                </Box>

                <Box className="ml-10 mt-10">
              
                    <Link  href="/"> 
                        <a   className={`flex flex-col justify-center pt-2 pb-2 pl-4 pr-4 items-center ${classes.link}`}  >
                            مشاهده همه 
                        </a>
                    </Link>
                </Box>

            </Box>
          
        </>
    )
}
export default Title;