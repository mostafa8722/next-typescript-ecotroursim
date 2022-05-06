import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomImageViewer from "../customImageViewer"
import Link from 'next/link'
import {makeStyles} from "@mui/styles"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const AboutPart1 = ()=>{
    
    const useStyles = makeStyles({
        box :{
            boxShadow: "0 0 6px #00000029",
            padding : "5px 10px",
            borderRadius : "10px",
            height : "200px",
            marginRight:"20px"
        },
        title:{
          backgroundColor:"#8cdc64",
          borderRadius : "10px",
          padding:"10px 20px",
          top:"-30px",
          right:"-30px"
        }

    })
    const classes = useStyles();
    return (
        <>
            <Box className="mr-10 ml-10">
                <Typography className={`text-xl  font-bold text-right mr-10  mt-5   `} variant="h2" component="h2" >
                                    ارزش های کومه گردی
                </Typography>
                <Box className="grid grid-cols-4 mr-10 ml-10 mt-10 mb-10">
                    <Box className={`relative ${classes.box}`}>
                        <Typography className={`text-base absolute ${classes.title} text-white`} variant="h2" component="span"  >
                            قهرمان ماموریت باش
                        </Typography>
                        <Typography className={`text-sm   leading-7  mt-2 `} variant="h2" component="p" paragraph={true} >
                                ما می‌خواهیم تا ۱۰ سال آینده شرکتی محبوب با به‌روزترین و بهترین خدمات گردشگری در سطح بین‌المللی باشیم.
                        </Typography>

                    </Box>

                    <Box className={`relative ${classes.box} mt-20`}>
                        <Typography className={`text-base absolute ${classes.title} text-white`} variant="h2" component="span"  >
                            قهرمان ماموریت باش
                        </Typography>
                        <Typography className={`text-sm   leading-7  mt-2 `} variant="h2" component="p" paragraph={true} >
                                ما می‌خواهیم تا ۱۰ سال آینده شرکتی محبوب با به‌روزترین و بهترین خدمات گردشگری در سطح بین‌المللی باشیم.
                        </Typography>

                    </Box>

                    <Box className={`relative ${classes.box}`}>
                        <Typography className={`text-base absolute ${classes.title} text-white`} variant="h2" component="span"  >
                            قهرمان ماموریت باش
                        </Typography>
                        <Typography className={`text-sm   leading-7  mt-2 `} variant="h2" component="p" paragraph={true} >
                                ما می‌خواهیم تا ۱۰ سال آینده شرکتی محبوب با به‌روزترین و بهترین خدمات گردشگری در سطح بین‌المللی باشیم.
                        </Typography>

                    </Box>

                    <Box className={`relative ${classes.box} mt-20`}>
                        <Typography className={`text-base absolute ${classes.title} text-white`} variant="h2" component="span"  >
                            قهرمان ماموریت باش
                        </Typography>
                        <Typography className={`text-sm   leading-7  mt-2 `} variant="h2" component="p" paragraph={true} >
                                ما می‌خواهیم تا ۱۰ سال آینده شرکتی محبوب با به‌روزترین و بهترین خدمات گردشگری در سطح بین‌المللی باشیم.
                        </Typography>

                    </Box>
                    
                </Box>
            </Box>
       
        </>
    )
}
export default AboutPart1;