import React from "react"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import customStyles from "../../styles/Style.module.css"
import Benefit from "./benefit"

const lists = [

{src:"/images/support-benefit-icon.svg",title:"پشتیبانی شبانه‌روزی",body:"کومه گردی به صورت شبانه‌روزی و در ایام تعطیل آماده پاسخگویی به شما است"},
{src:"/images/guarantee-benefit-icon.svg",title:"ضمانت بازگشت هزینه",body:"درصورت لغو رزرو، با توجه به قوانین لغو ضمانت بازگشت هزینه بر عهده اتاقک است"},
{src:"/images/credit-benefit-icon.svg",title:"اعتبار سنجی میزبان و مسافر",body:"بررسی اطلاعات میزبان‌ها و مهمان‌ها، یکی از مهم‌ترین اقدامات اتاقک است"},
{src:"/images/quality-benefit-icon.svg",title:"کنترل کیفی توسط اتاقک",body:"واحدهای اقامتی در اتاقک، از نظر استانداردهای میزبانی و امکانات رفاهی بررسی می‌شوند"},
{src:"/images/train-benefit-icon.svg",title:"آموزش و تایید میزبان",body:"تمامی میزبان‌های اتاقک، توسط تیم پشتیبانی مورد آموزش قرار گرفته‌اند"},
{src:"/images/certificate-benefit-icon.svg",title:"دریافت تمام مجوزهای لازم",body:"اتاقک مجوزهای لازم برای خدمات گردشگری را با استانداردهای لازم دارد"},
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

                           lists.map((list,index)=><Benefit  key={index}  src={list.src}  title={list.title}  body={list.body}  />)
                       }
                       
                     
                   </Box>


                </Box>

           </Box>
        
        </>
    )
}

export default Benefits;
