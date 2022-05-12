import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomCalender from "../../../app/calender/customCalender"



const Calender = ()=>{
   
   
    

    
    

   
  

    return (
        <>
        <Box className="mr-10">
                <Typography className={`text-xl font-bold   mt-3 `} variant="h2" component="h2" >
                        تقویم
                    </Typography>

                    <Box >
                 
                     <CustomCalender />
                         
                    
                    
                    </Box>
            </Box>
        </>
    )
}
export default Calender;