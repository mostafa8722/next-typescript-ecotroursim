import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { makeStyles } from '@mui/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';

import CircleIcon from '@mui/icons-material/Circle';

const RuleResidence = ()=>{
    const useStyles = makeStyles({
        time :{
            border:"1px solid #eeeeee",
            borderRadius:"10px",
            padding:"5px 10px"
        },
        circle:{
            fontSize:"8px",
           
        },
        item:{
            backgroundColor:"#ff2200"
        }
        
    })
    const classes = useStyles()
    return (
        <>
            <Box className ="mb-3 mt-3 mr-10" >
                <Box className="flex">
                    <Typography className={`text-xl font-bold   mt-3 `} variant="h2" component="h2" >
                    مقررات اقامتگاه
                    </Typography>
                   
                </Box>
            
                <Box className="flex mt-3">
                    <Box className={classes.time}>
                         <Box  className="flex">
                            <AccessTimeIcon />
                            <Typography className={`text-sm  mr-2 `} variant="h2" component="span" >
                                  ساعت ورود از
                             </Typography>
                         </Box>
                             <Typography className={`text-sm font-bold block text-center   mt-1 mr-2 `} variant="h2" component="span" >
                                3 عصر تا نامحدود 
                             </Typography>

                    </Box>
                    
                    <Box className={`mr-3 ${classes.time}`}>
                         <Box  className="flex">
                            <AccessTimeIcon />
                            <Typography className={`text-sm  mr-2 `} variant="h2" component="span" >
                                ساعت خروج تا 
                             </Typography>
                         </Box>
                             <Typography className={`text-sm font-bold block mt-1 text-center mr-2 `} variant="h2" component="span" >
                                 1 عصر
                             </Typography>

                    </Box>

                </Box>


                <Box>
                <List className="mt-5" >
          <ListItem  className={`text-right mt-0 mb-0 pt-0 pb-0`}>
              <CircleIcon className={`ml-2 ${classes.circle}`} />
             <ListItemText className="text-sm" primary="پخش موزیک با صدای بلند ممنوع می باشد " />
            
          </ListItem>
          <ListItem  className={`text-right mt-0 mb-0 pt-0 pb-0`}>
              <CircleIcon className={`ml-2 ${classes.circle}`} />
             <ListItemText className="text-sm" primary="پخش موزیک با صدای بلند ممنوع می باشد " />
            
          </ListItem>
          <ListItem  className={`text-right mt-0 mb-0 pt-0 pb-0`}>
              <CircleIcon className={`ml-2 ${classes.circle}`} />
             <ListItemText className={`text-sm `} primary="پخش موزیک با صدای بلند ممنوع می باشد " />
            
          </ListItem>
          
        </List>
       

                </Box>
                <Box>

                </Box>
            </Box>
          
        </>
    )
}
export default RuleResidence;