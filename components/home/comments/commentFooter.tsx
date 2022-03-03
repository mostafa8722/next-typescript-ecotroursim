import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {icon} from "../../../utils/icons"

const CommentFooter = (props:object)=>{
    const {location} = props;
    return (
        <>
        <Box className="comment-footer flex justify-between ">
                      
                      <Box className="flex ">
                      <Box className="mt-4 ml-2">
                      {icon("location",{fontSize:"15px",height:"15px",color:"aaaaaa"})}
                      </Box>
                      <Typography className="text-sm mt-3 text-center" variant="h2" component="p" paragraph={true}>
                       {location}

                     </Typography>

                      </Box>
                      <Box className="flex mt-5 ">
                      
                        {icon("arrowLeft",{fontSize:"20px",height:"20px",color:"5bf209"})}
                        {icon("arrowLeft",{fontSize:"20px",height:"20px",color:"43ad26"})}

                      </Box>
                  </Box>
        </>
    )

}
export default CommentFooter;