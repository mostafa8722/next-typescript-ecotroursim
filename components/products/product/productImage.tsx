
import CustomImageViewer from "../../customImageViewer"
import Box from "@mui/material/Box";
import { makeStyles } from '@mui/styles';

interface Props {
 src :string
}
const SliderImage = (props:Props)=>{
    const {src } = props
    const useStyles = makeStyles({
        root: {
            paddingRight: "3px!important",
            paddingLeft: "3px!important",
           borderRadius:"10px!important"
            
    
        },
    
       
    });
    const classes = useStyles();
    return (
    <>
     <Box className="mt-1 mb-2">
     <CustomImageViewer
                    src={src}
                    className={classes.root}
                    height={150}
                    width={300}
                    objectFit="cover"
                    onClick={() => {
                      
                    }}
                />
     </Box>
    </>
    )
}
export default SliderImage;