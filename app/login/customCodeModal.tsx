import * as React from "react";
import Box from "@mui/material/Box";
import styles from "../../../styles/login.module.css";
import Typography from "@mui/material/Typography";
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import {useState} from "react";
import CustomInput from "../input/customInput"

import {styleInput,CustomButton} from "../../logic/css/style"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius:5,
    overflow:"hidden",

    outline:'none',

    p: 4,
};


const CustomMobileModal = (props:any)=> {
     const {open,handleClose} = props;
    const [accept,setAccept] = useState("ok")
    const handleRadioButtonChange = (event:any) =>{
        if(event)
        setAccept(event.target.value)
    }

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

    return  (
        <Box className={`flex`}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography className={`text-xl font-bold   mt-2 mb-1 `} variant="h2" component="h2" >
                       ارسال کد فعالسازی 
                    </Typography>

                    <Box className="mt-4">
                    <Typography className={`text-sm   mt-2 mb-1 `} variant="h2" component="span"  >
                       کد ارسال شده به شماره موبایل  
                    </Typography>

                    <Typography className={`text-sm   mt-2 mb-1 `} variant="h2" component="span"  >
                       09118856595
                    </Typography>

                    <Typography className={`text-sm   mt-2 mb-1 `} variant="h2" component="span"  >
                      را وارد کنید 
                    </Typography>
                    </Box>

                     <Box className="flex justify-center">
                     <Typography className={`text-sm  text-red-700 font-bold  mt-4 mb-1 `} variant="h2" component="span"  >
                           02:00 
                    </Typography>
                     </Box>

                    <Box className="mt-5 flex justify-center ">
                        <Box className="flex w-1/2">
                        <CustomInput
                                name="num1"
                                placeholder="1"
                                style={styleInput({width:50})} formik={formik} />
                                 <CustomInput
                                name="num1"
                                placeholder="1"
                                style={styleInput({width:50})} formik={formik} />
                                 <CustomInput
                                name="num1"
                                placeholder="1"
                                style={styleInput({width:50})} formik={formik} />
                                 <CustomInput
                                name="num1"
                                placeholder="1"
                                style={styleInput({width:50})} formik={formik} />
                        </Box>
                    

                               

                    </Box>
                    <Box className="flex justify-center  mt-3 mb-3">
                    <CustomButton  orderPage={"false"} before={false} style={{padding:"5px 10px",height:"40px",width:"300px",top:"20px"}}>ارسال  </CustomButton>

                    </Box>
                    <Box  className="flex justify-center mt-10">
                    <Typography className={`text-sm    mb-1 `} variant="h2" component="span"  >
                      کد فعال سازی را دریافت نکرده اید؟
                    </Typography>
                    <CustomButton  orderPage={"false"} before={false} style={{bg:"#ffffff",color:"#2a22ef",shadow:"0px",width:"90px",top:"0px",padding:"0px",size:"0.8rem"}}>ارسال مجدد</CustomButton>



                    </Box>
                    

                </Box>
            </Modal>

        </Box>
    );
}

export  default  CustomMobileModal;

