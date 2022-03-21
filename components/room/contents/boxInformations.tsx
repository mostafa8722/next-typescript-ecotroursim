import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@mui/styles';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import StraightenIcon from '@mui/icons-material/Straighten';



const BoxInformations = ()=>{

    const useStyles = makeStyles({
        root : {
            backgroundColor : "#eeeeee",
            borderRadius : 10, 
            padding:"10px 20px"
        },
        icon : {
            fontSize :40,
        },


    })
    const classes = useStyles();

    return (
        <>
            <Box className={`${classes.root}  mt-5 mr-10 ml-10   flex justify-around `} >

                <Box className="flex flex-col">

                   <ApartmentIcon className={`${classes.icon} `} />
                   <Typography className={`text-base  mt-3 `} variant="h2" component="span" >
                       نیمه دربست
                    </Typography>
                </Box>

                <Box className="flex flex-col">

                    <SupervisedUserCircleIcon className={`${classes.icon} `} />
                    <Typography className={`text-base mt-3  `} variant="h2" component="span" >
                        3 نفره
                    </Typography>
                </Box>

                <Box className="flex flex-col">

                    <BedroomChildIcon className={`${classes.icon} `} />
                    <Typography className={`text-base mt-3  `} variant="h2" component="span" >
                        2 اتاق خواب
                    </Typography>
                </Box>

                <Box className="flex flex-col">

                    <StraightenIcon className={`${classes.icon} `} />
                    <Typography className={`text-base  mt-3  `} variant="h2" component="span" >
                        14 متر
                    </Typography>
                </Box>



            </Box>
        </>
    )
}
export default BoxInformations;