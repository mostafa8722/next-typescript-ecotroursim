import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@mui/styles';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';

const RoomSpace = ()=>{

    const useStyles = makeStyles({
        root : {
            width:150,
            height:200,
            borderRadius :10,
            padding:10,

            boxShadow: "rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px ",
        },
        icon :{
            fontSize:50,
        },
        title : {
            backgroundColor:"#dddddd",
            borderRadius:10,
            padding:"5px 10px"
        }
    })

    const classes = useStyles();
    return (
        <>
        <Box >
        <Box className="flex  mr-10 mt-10 ">
        <Typography className={`text-xl   `} variant="h2" component="h2" >
           فضای خواب  
        </Typography>
         <Box className={`${classes.title} mr-2`}>
            <Typography className={`text-sm `} variant="h2" component="h2" >
            4 اتاق خواب 
            </Typography>
         </Box>
        </Box>
        <Box className=" mr-10 mb-5 ">
            <Box className="grid grid-cols-4">
                <Box className={`flex flex-col items-center   ${classes.root}`}>
                    <BedroomParentIcon className={` mt-5 ${classes.icon}`} />
                    <Typography className={`text-sm font-bold mt-2 `} variant="h2" component="span" >
                     اتاق 1
                    </Typography>
                    <Typography className={`text-sm mt-2 `} variant="h2" component="span" >
                      یک تخت دونفره
                    </Typography>
                    <Typography className={`text-sm mt-2 `} variant="h2" component="span" >
                     4 دست تخت خواب
                    </Typography>
                </Box>

                <Box className={`flex flex-col items-center   ${classes.root}`}>
                    <BedroomParentIcon className={` mt-5 ${classes.icon}`} />
                    <Typography className={`text-sm font-bold mt-2 `} variant="h2" component="span" >
                     اتاق 1
                    </Typography>
                    <Typography className={`text-sm mt-2 `} variant="h2" component="span" >
                      یک تخت دونفره
                    </Typography>
                    <Typography className={`text-sm mt-2 `} variant="h2" component="span" >
                     4 دست تخت خواب
                    </Typography>
                </Box>

                <Box className={`flex flex-col items-center   ${classes.root}`}>
                    <BedroomParentIcon className={` mt-5 ${classes.icon}`} />
                    <Typography className={`text-sm font-bold mt-2 `} variant="h2" component="span" >
                     اتاق 1
                    </Typography>
                    <Typography className={`text-sm mt-2 `} variant="h2" component="span" >
                      یک تخت دونفره
                    </Typography>
                    <Typography className={`text-sm mt-2 `} variant="h2" component="span" >
                     4 دست تخت خواب
                    </Typography>
                </Box>

                <Box className={`flex flex-col items-center   ${classes.root}`}>
                    <BedroomParentIcon className={` mt-5 ${classes.icon}`} />
                    <Typography className={`text-sm font-bold mt-2 `} variant="h2" component="span" >
                     اتاق 1
                    </Typography>
                    <Typography className={`text-sm mt-2 `} variant="h2" component="span" >
                      یک تخت دونفره
                    </Typography>
                    <Typography className={`text-sm mt-2 `} variant="h2" component="span" >
                     4 دست تخت خواب
                    </Typography>
                </Box>

            </Box>
            
        </Box>

        </Box>
    </>
    )
}
export default RoomSpace;