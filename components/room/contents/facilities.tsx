import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Facility  from "./facility";
import FlatwareIcon from '@mui/icons-material/Flatware';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ChairIcon from '@mui/icons-material/Chair';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';

const Facilities = ()=>{
    return (
        <>
            <Box >
            <Typography className={`text-xl   mr-10 mt-10 `} variant="h2" component="h2" >
               امکانات 
            </Typography>
            <Box className=" mr-10 mb-5 ">
                <Box className="grid grid-cols-2">
                  
                  <Facility key={0} title="اجاق گاز" Icon ={MicrowaveIcon}  />
                  <Facility key={1} title="وسایل آشپزخانه" Icon ={FlatwareIcon}  />
                  <Facility key={2} title="یخچال" Icon ={KitchenIcon}  />
                  <Facility key={3} title="مبلمان" Icon ={ChairIcon}  />
                  <Facility key={4} title="میزغذا خوری" Icon ={TableRestaurantIcon}  />

                  <Facility key={5} title="اجاق گاز" Icon ={MicrowaveIcon}  />
                  <Facility key={6} title="وسایل آشپزخانه" Icon ={FlatwareIcon}  />
                  <Facility key={7} title="یخچال" Icon ={KitchenIcon}  />
                  <Facility key={8} title="مبلمان" Icon ={ChairIcon}  />
                  <Facility key={9} title="میزغذا خوری" Icon ={TableRestaurantIcon}  />

                  <Facility key={10} title="اجاق گاز" Icon ={MicrowaveIcon}  />
                  <Facility key={11} title="وسایل آشپزخانه" Icon ={FlatwareIcon}  />
                  <Facility key={12} title="یخچال" Icon ={KitchenIcon}  />
                  <Facility key={13} title="مبلمان" Icon ={ChairIcon}  />
                  <Facility key={14} title="میزغذا خوری" Icon ={TableRestaurantIcon}  />
                 

                </Box>
                
            </Box>

            </Box>
        </>
    )

}
export default Facilities;