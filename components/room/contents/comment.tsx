import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomImageViewer from "../../customImageViewer"
import { makeStyles } from '@mui/styles';
import Star from './star';

interface Props{
    name : string,
    date: string,
    text : string,
    src : string,
    star :number,
 
}
const Comment = (props:Props)=> {

    const {name,date,text,src,star} = props;



    const useStyles = makeStyles({
        
        star : {
           color:"#eeeeee",
          
           
        },
        starActive:{
            color:"#f0c807"
        },
        img : {
            borderRadius:"50%"
        },
        date:{
            color:"#cccccc",
            fontSize:"0.7rem"
        }
    })
 const classes = useStyles()
    
 return (
 <>
    <Box className="flex flex-col mt-2">
        <Box className="flex justify-between ">
            <Box className="flex">
            <CustomImageViewer
                    src={src}
                    className={classes.img}
                    height={60}
                    width={60}
                    objectFit="cover"
                  
                />
                <Box className="flex flex-col">
                <Typography className={`text-sm mt-1 mr-2   `} variant="h2" component="span" >
                    {name}
                </Typography>
                <Typography className={`text-sm mt-1 mr-2   ${classes.date}`} variant="h2" component="span" >
                    {date}
                </Typography>
                </Box>
            </Box>

            <Star star1={2} star2={2}  star3={2}  star4={2}  star5={1} size={14}  />
          
        </Box>
        <Typography className={`text-sm mt-3 mr-1   `} variant="h2" component="p" paragraph={true} >
              {text}
        </Typography>

    </Box>
 
 </>
 )


}

export default Comment;