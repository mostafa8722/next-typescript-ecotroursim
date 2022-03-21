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
                        ورود / ثبت نام
                    </Typography>

                    <Typography className={`text-sm   mt-2 mb-1 `} variant="h2" component="p" paragraph={true}  >
                        برای ورود یا ثبت نام شماره همراه خود را وارد کنید 
                    </Typography>

                    <Box>
                    <CustomInput
                                name="register_number"
                                placeholder="12345"
                                style={styleInput({})} formik={formik} />

                    </Box>
                    <Box className="flex justify-center  mt-3 mb-3">
                    <CustomButton  orderPage={"false"} before={false} style={{padding:"5px 10px",height:"40px",width:"300px",top:"20px"}}>ادامه </CustomButton>

                    </Box>
                    

                </Box>
            </Modal>

        </Box>
    );
}

export  default  CustomMobileModal;

