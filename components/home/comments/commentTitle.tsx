import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {icon} from "../../../utils/icons"

const CommentTitle = (props)=>{
  const {name,date} = props;
    return (
        <>
          <Box className="flex justify-between">
              <Box className="flex">
                  <Box className="mt-6">
                  {icon("user",{fontSize:"20px",height:"20px",color:"aaaaaa"})}
                  </Box>
             
                  <Box className="flex flex-col mr-3">
                    <Typography className="text-base mt-1 text-center" variant="h2" component="h3">
                       {name}

                    </Typography>
                    <Typography className="text-xs mt-2 text-center" variant="h2" component="p" paragraph={true}>
                       {date}

                     </Typography>
                          
                  </Box>

              </Box>

              <Box className="mt-10">
              {icon("thumbs-up",{fontSize:"15px",height:"15px",color:"aaaaaa"})}
              </Box>

          </Box>
        </>
    )
}

export default CommentTitle ;