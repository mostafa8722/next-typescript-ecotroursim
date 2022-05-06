import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactForm from "./contactForm"

    const ContactDescription = ()=>{

        return (
            <>
                 <Box className="mt-10  flex flex-col">

                     <Box className="mt-5 flex">
                        <Typography className={`text-base  font-bold   ml-2  `} variant="h2" component="span" >
                                آدرس :
                        </Typography>
                        <Typography className={`text-base    `} variant="h2" component="span" >
                             لاهیجان خیابان کاشف شرقی 
                        </Typography>
                     </Box>
                     <Box className="mt-5 flex">
                        <Typography className={`text-base  font-bold   ml-2  `} variant="h2" component="span" >
                                شماره تماس  :
                        </Typography>
                        <Typography className={`text-base    `} variant="h2" component="span" >
                            09118448204
                        </Typography>
                     </Box>
                     <Box className="mt-5 flex">
                        <Typography className={`text-base  font-bold   ml-2  `} variant="h2" component="span" >
                             شماره موبایل : 
                        </Typography>
                        <Typography className={`text-base    `} variant="h2" component="span" >
                            09118448204
                        </Typography>
                     </Box>
                     <Box className="mt-5 flex">
                        <Typography className={`text-base  font-bold   ml-2  `} variant="h2" component="span" >
                            ایمیل  : 
                        </Typography>
                        <Typography className={`text-base    `} variant="h2" component="span" >
                        mostafa.8722@gmail.com
                        </Typography>
                     </Box>

                     <Box>
                         <ContactForm />
                     </Box>

                </Box>
            
            </>
        )
    }
    export default ContactDescription;