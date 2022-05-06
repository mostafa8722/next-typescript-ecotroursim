import CustomInput from "../../app/input/customInput"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {styleInput,CustomButton} from "../../logic/css/style"
import { useFormik } from 'formik';

    const ContactForm = () => {

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

                <Box  className="flex flex-col mt-10 mb-10">
                        <Typography className={`text-base font-bold   mt-10 mb-1 `} variant="h2" component="h2" >
                        ارسال پیام
                        </Typography>

                    

                        <Box>
                        
                        <Box className="flex flex-col mt-5">
                        <Typography className={`text-sm block  text-green-700  mb-2 `} variant="h2" component="span" paragraph={true}   >
                        نام و نام خانوادگی خود را وارد کنید
                        </Typography>
                        <CustomInput
                                    name="register_number"
                                    placeholder="نام و نام خانوادگی "
                                    style={styleInput({})} formik={formik} />
                        </Box>

                        <Box className="flex flex-col mt-5">
                        <Typography className={`text-sm block  text-green-700  mb-2 `} variant="h2" component="span" paragraph={true}   >
                        ایمیل 
                        </Typography>
                        <CustomInput
                                    name="register_number"
                                    placeholder="ایمیل"
                                    style={styleInput({})} formik={formik} />
                        </Box>

                        
                        <Box className="flex flex-col mt-5">
                        <Typography className={`text-sm block  text-green-700  mb-2 `} variant="h2" component="span" paragraph={true}   >
                            متن پیام
                        </Typography>
                        <CustomInput
                                    name="register_number"
                                    placeholder="پیام ..."
                                    rows={5}
                                    style={styleInput({minHeight:"150px"})} formik={formik} />
                        </Box>


                        

                       

                        

                        </Box>
                        <Box className="flex justify-center  mt-3 mb-3">
                        <CustomButton  orderPage={"false"} before={false} style={{padding:"5px 10px",height:"40px",width:"200px",top:"20px"}}>ارسال پیام </CustomButton>

                        </Box>
                    

                </Box>
            
            </>
        )
    }
    export default ContactForm;