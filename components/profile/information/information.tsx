import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles"
import Divider from '@mui/material/Divider';

const Information = ()=>{
    const useStyles = makeStyles({
        root : {
           borderRadius :10,
           backgroundColor:"#eeeeee",
           padding : "10px 20px",
           width:"calc(100% - 300px)",
        }
    }) 
    const classes = useStyles();

    return (
        <>
          <Box className={`mt-10 mr-5 ml-5 mb-10 pb-10  ${classes.root} `}>
              <Typography className={` font-bold `} component="h2">
                 اطلاعات کاربری
              </Typography>
                         
              <Box  className="mt-10 ">
                  <Box className="grid grid-cols-2 mb-5 mt-10" >
                      <Box className="flex mt-2">
                        <Typography className={`text-sm  font-bold `} component="span">
                            نام و نام خانوادگی 
                        </Typography>
                        <Typography className={`mr-2 text-sm  `} component="span">
                          علی 
                        </Typography>
                      </Box>
                      <Box className="flex mt-2">
                        <Typography className={` font-bold  text-sm`} component="span">
                            شماره تماس
                        </Typography>
                        <Typography className={`  text-sm mr-2`} component="span">
                          09119844830 
                        </Typography>
                      </Box>
                
                      <Box className="flex mt-2">
                        <Typography className={` font-bold text-sm`} component="span">
                           ایمیل
                        </Typography>
                        <Typography className={` mr-2 text-sm `} component="span">
                           
                        </Typography>
                      </Box>

                      <Box className="flex mt-2">
                        <Typography className={` font-bold text-sm`} component="span">
                            جنسیت
                        </Typography>
                        <Typography className={` mr text-sm `} component="span">
                          ممذکر 
                        </Typography>
                      </Box>

                      <Box className="flex mt-2">
                        <Typography className={`text-sm font-bold `} component="span">
                            شماره حساب
                        </Typography>
                        <Typography className={`text-sm mr-2 `} component="span">
                          09118ث44 
                        </Typography>
                      </Box>
                      <Box className="flex mt-2">
                        <Typography className={`text-sm font-bold `} component="span">
                           آدرس 
                        </Typography>
                        <Typography className={`text-sm  mr-2 `} component="span">
                          تست تستس 
                        </Typography>
                      </Box>
                  </Box>
             
               
 
                
              </Box>

          </Box>
        </>
    )

}

    export default Information;