import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


interface Props {
    title:string,
 }


const SliderTitle = (props:Props)=>{
    const {title} = props

    return (
        <>
          <Box className="flex mr-1 ml-1">
          <Typography className="text-base font-bold mt-1 text-center " variant="h2" component="h3">
                       {title}

           </Typography>

          </Box>
        </>
    )
}
export default SliderTitle;
