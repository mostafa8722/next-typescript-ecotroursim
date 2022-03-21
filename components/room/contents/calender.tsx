import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DatePicker } from "jalali-react-datepicker";
import { RangeDatePicker } from "jalali-react-datepicker";



const Calender = ()=>{

    return (
        <>
        <Box className="mr-10">
                <Typography className={`text-xl font-bold   mt-3 `} variant="h2" component="h2" >
                        تقویم
                    </Typography>
                    <Box className="flex">
                    <DatePicker />
                    
                    </Box>
            </Box>
        </>
    )
}
export default Calender;