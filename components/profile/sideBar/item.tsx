import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles} from "@mui/styles"

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'; 

interface Props {
Icon?: any,
title?:string,
showChild?:boolean,
handleClick?: any
}

const Item = (props:Props) => {
    const {title,Icon ,showChild,handleClick} = props;
     const useStyles = makeStyles({
      
        box:{
            boxShadow: "0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f",
         
            width:"80%",
            borderRadius:5,
           
           },
           topBox:{

            " &:hover":{
                backgroundColor:"#160fd9",
                overflow : "hidden",
                "& $styled": {
                    color: "#ffffff"
                  }
              
            }
           },
           styled:{},
           childBox:{
           
            height:45,
           
            width:"100%",

            " &:hover":{
                backgroundColor:"#05a12c",
                "& $styled": {
                    color: "#ffffff"
                  }
              
            }
           
           }

    })
    const classes = useStyles()
  

    return (
        <>
          <Box className={`${classes.box}  mt-3 overflow-hidden`} >
                <Box   onClick={handleClick} className={`flex justify-between  pb-2 cursor-pointer ${classes.topBox} overflow-hidden `} >
                    <Box className="flex">
                        
                        <Icon className={`text-base text-blue-900 font-bold mt-3 mr-5  ${classes.styled}   `} />
                        <Typography className={`text-base text-blue-900 font-bold mt-3 mr-2   ${classes.styled}  `} variant="h2" component="h2" >
                         {title}
                         </Typography>
                    </Box>
                  
                   
                   {
                       showChild?
                       <KeyboardArrowUpIcon className={`mr-5 ml-5 mt-3 text-base text-blue-900 ${classes.styled}`} />
                       :
                       <KeyboardArrowDownIcon className={`mr-5 ml-5 mt-3 text-base text-blue-900 ${classes.styled}`} />
                   }
                   
                </Box>
                <Box className={`flex cursor-pointer pr-5 ${classes.childBox} ${showChild?"block":"hidden"}`}>
                    <Icon className={`text-base text-blue-900 mm font-bold mt-3 mr-5  ${classes.styled}   `} />
                    <Typography className={`text-base text-blue-900   font-bold mt-3 mr-2  ${classes.styled}  `} variant="h2" component="h2" >
                            {title}
                    </Typography>
                </Box>    


          </Box>
        </>
    )
}
export default Item;