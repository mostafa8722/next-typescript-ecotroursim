import React from "react"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import customStyles from "../../../styles/Style.module.css"
import Benefit from "./benefit"

const lists = [

{src:"/images/support-benefit-icon.svg",title1:"پشتیبانی",title2:" شبانه‌روزی",body:"کومه گردی به صورت شبانه‌روزی و در ایام تعطیل آماده پاسخگویی به شما است"},
{src:"/images/guarantee-benefit-icon.svg",title1:"ضمانت",title2:"بازگشت هزینه",body:"درصورت لغو رزرو، با توجه به قوانین لغو ضمانت بازگشت هزینه بر عهده اتاقک است"},
{src:"/images/credit-benefit-icon.svg",title1:"اعتبار سنجی ",title2:" میزبان و مسافر",body:"بررسی اطلاعات میزبان‌ها و مهمان‌ها، یکی از مهم‌ترین اقدامات اتاقک است"},
{src:"/images/quality-benefit-icon.svg",title1:"کنترل کیفی ",title2:" توسط کومه گردی",body:"واحدهای اقامتی در اتاقک، از نظر استانداردهای میزبانی و امکانات رفاهی بررسی می‌شوند"},
{src:"/images/train-benefit-icon.svg",title1:"آموزش و ",title2:" تایید میزبان",body:"تمامی میزبان‌های اتاقک، توسط تیم پشتیبانی مورد آموزش قرار گرفته‌اند"},
{src:"/images/certificate-benefit-icon.svg",title1:"دریافت تمام ",title2:" مجوزهای لازم",body:"اتاقک مجوزهای لازم برای خدمات گردشگری را با استانداردهای لازم دارد"},
];



const Benefits = ()=>{

    return (
        <>
           <Box className={`p-3 ${customStyles["bg-benefits"]}`}>
          
                <Box>
                    <Typography className="text-2xl mt-3 text-white text-center" variant="h2" component="h2" gutterBottom>
                        چرا باید از کومه گردی استفاده کنیم ؟!

                    </Typography>

                   <Box className="flex">

                       {

                           lists.map((list,index)=><Benefit  key={index}  src={list.src}  title1={list.title1}   title2={list.title2} body={list.body}  />)
                       }
                       
                     
                   </Box>


                </Box>

           </Box>
        
        </>
    )
}

export default Benefits;
