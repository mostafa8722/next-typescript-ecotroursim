import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles"


interface Props {
    title:string,
 }


const SliderTitle = (props:Props)=>{
    const {title} = props

    const useStyles = makeStyles({
        title :{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width:"290px"
            }
        
    })

    const classes = useStyles();

    return (
        <>
          <Box className="flex mr-1 ml-1">
          <Typography className={`text-base font-bold mt-1 text-center ${classes.title}`} variant="h2" component="h3">
                       {title}

           </Typography>

          </Box>
        </>
    )
}
export default SliderTitle;
