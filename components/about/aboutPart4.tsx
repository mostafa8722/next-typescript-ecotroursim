import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomImageViewer from "../customImageViewer"
import Link from 'next/link'
import {makeStyles} from "@mui/styles"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const AboutPart1 = ()=>{
    
    const useStyles = makeStyles({
        certificateArrow :{
          fontSize:"0.7rem"
        }

    })
    const classes = useStyles();
    return (
        <>
          <Box className="grid grid-cols-2 mr-10 ml-10 mt-10 mb-10">
          <Box className="flex flex-col items-center">
                        <CustomImageViewer 
                         src="/images/mobile.jpg"
                         width="300px"
                         height="200px"
                         objectFit="contain"
                        
                        />
                          <Link href="/">
                                <a className={`font-xs mt-4 text-red-700`}>
                                    دانلود اپلیکیشن
                                  <ArrowBackIosIcon className={`${classes.certificateArrow} text-red-300`} />
                                  <ArrowBackIosIcon className={`${classes.certificateArrow} text-red-500`} />
                                  <ArrowBackIosIcon className={`${classes.certificateArrow} text-red-700`} />
                                 
                                </a>
                            </Link>
                    </Box>
                    <Box className="flex flex-col items-center">
                        <CustomImageViewer 
                         src="/images/desktop.jpg"
                         width="300px"
                         height="200px"
                         objectFit="contain"
                        
                        />
                          <Link href="/">
                                <a className={`font-xs mt-2 text-red-700`}>
                                     مشاهده وب سایت
                                  <ArrowBackIosIcon className={`${classes.certificateArrow} text-red-300`} />
                                  <ArrowBackIosIcon className={`${classes.certificateArrow} text-red-500`} />
                                  <ArrowBackIosIcon className={`${classes.certificateArrow} text-red-700`} />
                                 
                                </a>
                            </Link>
                    </Box>
                </Box>
        </>
    )
}
export default AboutPart1;