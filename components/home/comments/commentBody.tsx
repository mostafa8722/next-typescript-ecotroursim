import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

   const CommentBody = (props:object)=>{
       const {body} = props;

    return (
        <>
         <Typography className="text-sm mt-2 leading-6 text-right" variant="h2" component="p" paragraph={true}>
                     {body}

        </Typography>
        
        </>
    )

   }
   export default CommentBody;