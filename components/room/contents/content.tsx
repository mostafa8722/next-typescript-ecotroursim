import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from "@mui/material/Typography";
import { makeStyles } from '@mui/styles';
import Location from "./location"
import CodeSection from "./codeSection"
import BoxInformations from "./boxInformations"
import SpaceInformations from "./spaceInformations"
import RoomSpace from "./roomSpace"

import Facilities from "./facilities"
import Descriptions from "./descriptions"
import Calender from "./calender"
import RuleReserve from "./ruleReserve"
import RuleResidence from "./ruleResidence"
import HostInformations from "./hostInformations"
import Map from "./map"
import Score from "./score"
import Comments from "./comments"
import Divider from '@mui/material/Divider';



const Content = ()=>{

    const useStyles = makeStyles({
        arrowClass :{
            fontSize:15,
            backGroundColor:"#555555", 
            marginRight:5,
            marginTop:5,
        }
    })

    const classes = useStyles();

return (
    <>
        <Box className="col-span-2 mr-10">

          <Location />
          <Typography className={`text-xl font-bold  mr-10 mt-3 `} variant="h2" component="h2" >
                 رزرو سوئیت ویلائی در رامسر
          </Typography>
          <CodeSection/>
         
          <BoxInformations />
         
          <Descriptions />
          <Divider />
          <SpaceInformations />
          <Divider />
          <RoomSpace />
          <Divider />
          <Facilities />
          <Divider />
          <Calender />
          <Divider />
          <RuleReserve />
          <Divider />
          <RuleResidence />
          <Divider />
          <Map />
          <Divider />
          <Score />
          <HostInformations />
          <Divider />
          <Comments /> 
        </Box>
    </>
)
ب
}

export default Content;