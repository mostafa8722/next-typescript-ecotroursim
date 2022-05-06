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
                    <Box className="flex mr-10 ml-5 flex-col justify-between">
                         <Box className="mt-10  flex flex-col">
                            <Typography className={`text-xl  font-bold   mt-5   `} variant="h2" component="h2" >
                                کومه گردی
                            </Typography>
                            <Typography className={`text-sm   leading-7  mt-5 `} variant="h2" component="p" paragraph={true} >
                            اتاقک سامانه هوشمند اجاره محل اقامت ویژه مسافران است و اکنون در بیش از ۲۵۰ شهر فعال است. هدف از ایجاد اتاقک ترویج سفرهای اقتصادی، مناسب برای تمام افراد جامعه و گردشگران است. در همین راستا تلاش می‌کنیم اقامتگاه‌هایی امن را با کم‌ترین هزینه در اختیار کاربران قرار دهیم
                            </Typography>
                         </Box>
                         <Box>
                         <Box className={`text-sm   mb-10 `}>
                            <Link href="/">
                                <a className={`font-xs text-green-700`}>
                                مجوز گردشگری از وزارت میراث و گردشگری 
                                  <ArrowBackIosIcon className={`${classes.certificateArrow} text-green-300`} />
                                  <ArrowBackIosIcon className={`${classes.certificateArrow} text-green-500`} />
                                  <ArrowBackIosIcon className={`${classes.certificateArrow} text-green-700`} />
                                 
                                </a>
                            </Link>
                         </Box>
                         </Box>
                    </Box>
                    <Box>
                        <CustomImageViewer 
                         src="/images/about-img.jpg"
                         width="700px"
                         height="400px"
                         objectFit="contain"
                        
                        />
                    </Box>
                </Box>
        </>
    )
}
export default AboutPart1;