import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles"
import CustomSelectInput from "../../../app/input/customSelectInput"
import { useFormik } from 'formik';
import {selectInput,ProFileButton,CustomButton} from "../../../logic/css/style"
import {useState} from "react"

import ButtonUnstyled from '@mui/base/ButtonUnstyled';
const select_style:object ={
    maxWidth: "100%",
    backgroundColor: "#F0EDF1",
    borderRadius: 15,
    height: 55,
    border: "none",
    fontSize: 15,
    
}
const subjects =[
    "موضوع یک ",
    "موضوع دو",
    "موضوع سه",
]
const Reserve = ()=>{

   
    const [subject,setSubject] = useState("0")
    const handleChange = ()=>{}
    const useStyles = makeStyles({
        box : {
            margin:"10px",
            borderRadius :"10px",
            boxShadow: "rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px ",
            width:"330px",
            height:"400px",
            overflow:"hidden"
        },
        title: {
           backgroundColor:"#777777",
           padding:"10px 15px",
        },
        reserveDate:{
            border :"1px solid #eeeeee",
            height:"40px",
            width:"300px"
        },
        reservePeople:{
     
            height:"40px",
            width:"300px"
        },
    

       
    });
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
        <Box className={`sticky top-0 ${classes.box}`}>
            <Box className={`flex justify-between ${classes.title}`}>
                
                <Typography className="text-base text-white " variant="h2" component="h2" >
                    نرخ هر شب
                </Typography>
                <Typography className="text-base text-white" variant="h2" component="span" >
                    1000 تومان
                </Typography>
            </Box> 


            <Box className="flex flex-col p-3 items-center">
            
            <Box className="flex flex-col mt-2">
                <Typography className="text-base mb-2 " variant="h2" component="h4" >
                        تاریخ رزرو
                </Typography>
                <Box className={classes.reserveDate}></Box>
            </Box>  
            <Box className="flex flex-col mt-4">
                <Typography className="text-base  " variant="h2" component="h4" >
                       تعداد نفرات
                </Typography>
                
                <Box className={classes.reservePeople}>

                <CustomSelectInput
                                            name="subject"
                                            className="w-100"
                                            label="انتخاب کنید"
                                            id="select-input-state"
                                            items={subjects}

                                            value={subject}
                                            handleChange={handleChange}
                                            style={selectInput(select_style)} formik={formik}
                                        />
                </Box>
            </Box> 

            <Box>
                
             <CustomButton  orderPage={"false"} before={true} style={{padding:"5px 10px",height:"40px",width:"300px",top:"20px"}}>رزرو</CustomButton>


            </Box>

            <Box className="flex  mt-3">
     
              <CustomButton  orderPage={"false"} before={false} style={{padding:"5px 10px",height:"40px",raduis:"5",width:"130px",top:"20px",color:"#555555",bg:"#ffffff",left:"10px"}}>ضمانت تحویل </CustomButton>
              <CustomButton  orderPage={"false"} before={false} style={{padding:"5px 10px",height:"40px",raduis:"5",width:"130px",top:"20px",color:"#555555",bg:"#ffffff",right:"10px"}}> راهنمای رزرو </CustomButton>

            </Box>

            <Box>
              
            </Box>



            </Box> 
        </Box>
    </>
)

}

export default Reserve;