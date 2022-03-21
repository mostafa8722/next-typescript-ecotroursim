import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from "@mui/material/Typography";

import { makeStyles } from '@mui/styles';



const Location = ()=>{

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
          <Box className="flex">
            <Typography className={`text-base   mr-10 `} variant="h2" component="h3" >
                   جاجیگا
            </Typography>
              <ArrowBackIosNewIcon className={classes.arrowClass} />
              <Typography className={`text-base   mr-1 `} variant="h2" component="h3" >
                   مازندران
            </Typography>
              <ArrowBackIosNewIcon className={classes.arrowClass} />

              <Typography className={`text-base font-bold  mr-1 `} variant="h2" component="h3" >
                  رامسر 
            </Typography>

            </Box>
    </>
)

}

export default Location;