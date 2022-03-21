import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {makeStyles} from "@mui/styles"

interface Props {
    title :string,
    icon : any


}

const Filter = (props:Props) =>{

    const {title,icon} = props; //


  const useStyles = makeStyles({
        box : {
            width:"240px",
            border :"1px solid #eeeeee",
            padding:"10px 20px",
            borderRadius:"10px",
           
        }
    })
    const classes = useStyles()
    return (
        <>
          <Box className={`flex justify-between cursor-pointer mt-2  ${classes.box}`}>
                <Box>
                  {icon}
                     <Typography className="  text-base mr-2  text-right" variant="h4" component="span" gutterBottom>

                      {title}
                    </Typography>
                </Box>
                <KeyboardArrowDownIcon />

            </Box>
        
        </>
    )

}
export default Filter;