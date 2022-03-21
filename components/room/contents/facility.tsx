import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from '@mui/styles';


        interface Props {
            Icon : any,
            title:string,
        }

const Facility = (props:Props)=>{
  const {Icon,title} =  props;
  const useStyles = makeStyles({
      icon : {
          fontSize :20,
          
      }
  })

   const classes = useStyles();
    return (
        <>
        <Box className="flex  mt-4">
                       <Icon className={classes.icon} />
                        <Typography className={`text-sm  mr-1 `} variant="h2" component="span" >
                         {title}
                        </Typography>
        </Box>


        </>
    )
    
}
export default Facility;