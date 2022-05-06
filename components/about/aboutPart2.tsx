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
            <Box>
            <Typography className={`text-xl  font-bold  text-center text-green-800  mt-5   `} variant="h2" component="h2" >
                          خوشحالیم که در لحظات سفر همراهتانیم
            </Typography>
            <Box className="grid grid-cols-2 mr-10 ml-10 mt-10 mb-10">
                    <Box className="flex mr-10 ml-5 flex-col ">
                         <Box className="mt-3  flex flex-col">
                            <Typography className={`text-xl  font-bold   mt-3   `} variant="h2" component="h2" >
                                ماموریت کومه گردی
                            </Typography>
                            <Typography className={`text-sm   leading-7  mt-2 `} variant="h2" component="p" paragraph={true} >
                                اتاقک مأموریت دارد امکانات لازم را برای سفرهای امن، بومی، متنوع، فراگیر و پایدار به وجود آورد. این سامانه با استفاده از تکنولوژی، با انگیزه تقویت وضعیت اقتصادی میلیون‌ها نفر در سراسر جهان، با توجه به استعدادها، علاقه‌مندی‌ها فضاهای موجود به کسب درآمد و کارآفرینی آن‌ها کمک می‌کند.
                            </Typography>
                         </Box>

                         <Box className="mt-2 flex flex-col">
                            <Typography className={`text-xl  font-bold   mt-3   `} variant="h2" component="h2" >
                                چشم انداز کومه گردی
                            </Typography>
                            <Typography className={`text-sm   leading-7  mt-2 `} variant="h2" component="p" paragraph={true} >
                            ما می‌خواهیم تا ۱۰ سال آینده شرکتی محبوب با به‌روزترین و بهترین خدمات گردشگری در سطح بین‌المللی باشیم.
                            </Typography>
                         </Box>
                         <Box>
                         
                         </Box>
                    </Box>
                    <Box>
                        <CustomImageViewer 
                         src="/images/goal.svg"
                         width="700px"
                         height="400px"
                         objectFit="contain"
                        
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default AboutPart1;