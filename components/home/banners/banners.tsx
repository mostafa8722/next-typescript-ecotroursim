import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BannerCard  from "./banner"


interface banner { 
    id:string,
    title :string,
    description :string,
    src :string,
}
const Banners = ()=>{

    const lists:banner[] = [
        {id:"1",title:"تجربه آرامش جنگل و دریا در نوروز ",description:"اجاره روزانه بهترین ویلاهای شمال",src:"/images/cottage.jpg"},
        {id:"2",title:"تجربه اقامتی دلچسب در تهران",description:"بهترین آپارتمان های مبله برای اقامت کوتاه مدت",src:"/images/apartment.jpg"},
       
    ]
    return (
        <>
          <Box className="flex mt-5 ">
            { 
             lists.map(list =><BannerCard key={list.id} id={list.id} title={list.title} description={list.description} src={list.src}  /> )
             }
          </Box>
        </>
    );
}
export default Banners ;