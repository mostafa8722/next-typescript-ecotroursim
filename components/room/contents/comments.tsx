import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@mui/styles';

import Comment from './comment'
import Divider from '@mui/material/Divider';



const Comments = ()=>{

 

    return (
        <>

        <Box className ="mb-3 mt-3 mr-10" >
            
            <Box className=" mt-3 ">
             
            <Box className="flex">
             <Typography className={`text-xl font-bold    `} variant="h2" component="h2" >
                نظر مهمانان
             </Typography>
             <Typography className={`text-sm mt-1 mr-1   `} variant="h2" component="span" >
               (6 دیدگاه)
             </Typography>

            </Box>

            <Box className={` flex flex-col mt-10 mr-3`} >
           
             <Comment  src="/images/profile.jpg" name="مهدی" date="20 خرداد 1400 "  star={4} text=" برخورد میزبان قشنگ بود عالی عالی بود" />
             <Divider />
             <Comment  src="/images/profile.jpg" name="مهدی" date="20 خرداد 1400 "  star={4} text=" برخورد میزبان قشنگ بود عالی عالی بود" />
             <Divider />
             <Comment  src="/images/profile.jpg" name="مهدی" date="20 خرداد 1400 "  star={4} text=" برخورد میزبان قشنگ بود عالی عالی بود" />
             <Divider />
             <Comment  src="/images/profile.jpg" name="مهدی" date="20 خرداد 1400 "  star={4} text=" برخورد میزبان قشنگ بود عالی عالی بود" />
        
           
    
         </Box>

            </Box>


          
            <Box>

            </Box>
        </Box>
        </>
    )
}
export default Comments;