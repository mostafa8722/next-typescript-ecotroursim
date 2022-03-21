import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Star from "./star"
const Score = ()=>{


   


    return (
        <>
         <Box className ="mb-3 mt-3 mr-10" >
            
                <Box className="flex mt-3 justify-between">
                 
                <Box className="flex">
                 <Typography className={`text-xl font-bold    `} variant="h2" component="h2" >
                    امتیاز
                 </Typography>
                 <Typography className={`text-sm mt-1 mr-1   `} variant="h2" component="span" >
                   (6 مهمان)
                 </Typography>

                </Box>

                <Box className={` flex flex-row-reverse mr-3`} >
               
               
               <Star star1={2} star2={2}  star3={2}  star4={2}  star5={1} size={20}  />
               
               <Typography className={`text-sm  ml-1 `} variant="h2" component="h2" >
                 4.3
               </Typography>
             </Box>

                </Box>


                <Box>
                  <Box className="grid grid-cols-2 mt-5">
                      <Box className="flex justify-between mt-3 ml-3">
                      <Typography className={`text-sm  mr-1   `} variant="h2" component="span" >
                            صحت مطالب
                      </Typography>
                      <Star star1={2} star2={2}  star3={2}  star4={2}  star5={1}  size={14} />
                      </Box>

                      <Box className="flex justify-between mt-3 ml-3">
                      <Typography className={`text-sm  mr-1   `} variant="h2" component="span" >
                            شیوه برخورد میزبان
                      </Typography>
                      <Star star1={2} star2={2}  star3={2}  star4={2}  star5={1}  size={14} />
                      </Box>

                      <Box className="flex justify-between mt-3 ml-3">
                      <Typography className={`text-sm  mr-1   `} variant="h2" component="span" >
                          پاگیزکی اقامتگاه 
                      </Typography>
                      <Star star1={2} star2={2}  star3={2}  star4={2}  star5={1}  size={14} />
                      </Box>

                      <Box className="flex justify-between mt-3 ml-3">
                      <Typography className={`text-sm  mr-1   `} variant="h2" component="span" >
                            مکان اقامتگاه 
                      </Typography>
                      <Star star1={2} star2={2}  star3={2}  star4={2}  star5={1}  size={14} />
                      </Box>

                      <Box className="flex justify-between mt-3 ml-3">
                      <Typography className={`text-sm  mr-1   `} variant="h2" component="span" >
                           تحویل اقامتگاه 
                      </Typography>
                      <Star star1={2} star2={2}  star3={2}  star4={2}  star5={1}  size={14} />
                      </Box>

                      <Box className="flex justify-between mt-3 ml-3">
                      <Typography className={`text-sm  mr-1   `} variant="h2" component="span" >
                             کیفیت نسبت به نرخ 
                      </Typography>
                      <Star star1={2} star2={2}  star3={2}  star4={2}  star5={1}  size={14} />
                      </Box>

                     



                     

                      
                  </Box>
          

                </Box>
                <Box>

                </Box>
            </Box>
        </>
    )
}
export default Score;