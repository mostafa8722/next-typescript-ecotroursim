import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@mui/styles';
import {selectInput,ProFileButton,CustomButton} from "../../../logic/css/style"

const RuleReserve = ()=>{
    const useStyles = makeStyles({
      
        special:{
            borderRadius:"10px",
            border : "1px dotted #ff2200",
            padding:"5px 10px"
        }
        
    })
    const classes = useStyles()

    return (
        <>
          <Box className="mr-10 mb-10">
             <Typography className={`text-xl font-bold   mt-3 `} variant="h2" component="h2" >
                    مقررات لغو رزرو
                </Typography>
                <Box >
                <Typography className={`text-sm  leading-7   mt-2 `} variant="h2" component="p" paragraph={true} >

                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

                <CustomButton  orderPage={"false"} before={false} style={{bg:"#ffffff",color:"#2a22ef",shadow:"0px",width:"100px",top:"0px",padding:"0px",size:"0.8rem"}}>توضیحات بیشتر</CustomButton>
                </Typography>
              

        
                </Box>

                <Box className={`${classes.special}`}>

               <Typography className={`text-base font-bold  text-red-600 mt-3 `} variant="h2" component="span" >
                   لغو رزرو در تعطیلات توروزی 
                </Typography>

                <Box className={`mt-2`}>
                    <Typography className={`text-sm   font-bold mt-3 `} variant="h2" component="span" >
                        تا قبل از 18 اسفند :  
                    </Typography>

                    <Typography className={`text-sm  leading-7 inline   mt-2 `} variant="h2" component="p" paragraph={true} >

                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.

                    </Typography>
                </Box>
                <Box className={`mt-1`}>
                    <Typography className={`text-sm  font-bold  mt-3 `} variant="h2" component="span" >
                   از 18 اسفند به بعد :
                    </Typography>

                    <Typography className={`text-sm  leading-7 inline   mt-2 `} variant="h2" component="p" paragraph={true} >

                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.

                    </Typography>
                </Box>

                <Box className={`mt-1`}>
                <Typography className={`text-sm font-bold  text-red-700 mt-3 `} variant="h2" component="span" >
                   پیک کرونا:
                </Typography>

                <Typography className={`text-sm  leading-7 inline   mt-2 `} variant="h2" component="p" paragraph={true} >

                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

                </Typography>


                </Box>
               </Box>

          </Box>
        </>
    )
}
export default RuleReserve;