import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {makeStyles} from "@mui/styles"

import Filter from "./filter"


const FilterSection = ()=>{

 

    return (
        <>
        <Box className="flex flex-col mt-20 ">
            <Filter key={1} title=" تاریخ ورود و خروج" icon={ <CalendarTodayIcon style={{fontSize:"17px"}} />} />
            <Filter key={2} title="تعداد نفرات" icon={ <GroupIcon style={{fontSize:"17px"}} />} />
            <Filter key={3} title="قیمت " icon={ <AttachMoneyIcon style={{fontSize:"17px"}} />} />
            <Filter key={3} title="نوع اقامتگاه " icon={ <CalendarTodayIcon style={{fontSize:"17px"}} />} />
            <Filter key={3} title="تعداد اتاق خواب " icon={ <CalendarTodayIcon style={{fontSize:"17px"}} />} />
            <Filter key={3} title="شهر " icon={ <CalendarTodayIcon style={{fontSize:"17px"}} />} />
     
          
        </Box>
        </>
    );

}
export default FilterSection;