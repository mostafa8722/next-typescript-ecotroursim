import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles"
import Divider from '@mui/material/Divider';
import {styleInput,CustomButton} from "../../../logic/css/style"
import { useFormik } from 'formik';
import CustomInput from "../../../app/input/customInput"
const Edit = ()=>{
    const useStyles = makeStyles({
        root : {
           borderRadius :10,
           backgroundColor:"#eeeeee",
           padding : "10px 20px",
           width:"calc(100% - 300px)",
        }
    }) 
    const classes = useStyles();

    const formik:any = useFormik({
      initialValues: {

          name: '',
          family: '',
          email: '',
          mobile: '',
          subject: '',
          user_type: '',
          message: '',



      },
      validationSchema: {},
      onSubmit: (values) => {



      }


  });

    return (
        <>
          <Box className={`mt-10 mr-5 ml-5 mb-10 pb-10  ${classes.root} `}>
              <Typography className={` font-bold mt-5 `} component="h2">
                 ویرایش اطلاعات کاربری
              </Typography>
                         
              <Box  className="mt-10 ">
                  <Box className="grid grid-cols-2 mb-5 mt-10" >
                      <Box className="flex flex-col  mt-2">
                        <Typography className={`text-sm  mb-2 font-bold `} component="span">
                            نام و نام خانوادگی 
                        </Typography>
                        <Box className="mt-2 mb-2 mr-2 ml-5">
                           <CustomInput
                                    name="register_number"
                                    placeholder="نام و نام خانوادگی"
                                    style={styleInput({bg:"#ffffff",height:40})} formik={formik} />
                        </Box>
                      </Box>
                      <Box className="flex flex-col mt-2 ">
                        <Typography className={` font-bold  text-sm`} component="span">
                            شماره تماس
                        </Typography>
                        <Box className="mt-2 mb-2 mr-2 ml-5">
                           <CustomInput
                                    name="register_number"
                                    placeholder="نام و نام خانوادگی"
                                    style={styleInput({bg:"#ffffff",height:40})} formik={formik} />
                        </Box>
                      </Box>
                
                      <Box className="flex flex-col mt-2">
                        <Typography className={` font-bold text-sm`} component="span">
                           ایمیل
                        </Typography>
                        <Box className="mt-2 mb-2 mr-2 ml-5">
                           <CustomInput
                                    name="register_number"
                                    placeholder="نام و نام خانوادگی"
                                    style={styleInput({bg:"#ffffff",height:40})} formik={formik} />
                        </Box>
                      </Box>

                      <Box className="flex flex-col mt-2">
                        <Typography className={` font-bold text-sm`} component="span">
                            جنسیت
                        </Typography>
                        <Box className="mt-2 mb-2 mr-2 ml-5">
                           <CustomInput
                                    name="register_number"
                                    placeholder="نام و نام خانوادگی"
                                    style={styleInput({bg:"#ffffff",height:40})} formik={formik} />
                        </Box>
                      </Box>

                      <Box className="flex mt-2">
                        <Typography className={`text-sm font-bold `} component="span">
                            شماره حساب
                        </Typography>
                        <Box className="mt-2 mb-2 mr-2 ml-5">
                           <CustomInput
                                    name="register_number"
                                    placeholder="نام و نام خانوادگی"
                                    style={styleInput({bg:"#ffffff",height:40})} formik={formik} />
                        </Box>
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

    export default Edit;