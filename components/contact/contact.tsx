
import Box from "@mui/material/Box";
import Map from "./map"
import ContactDescription from "./contactDescription"


const Contact = ()=>{
    return (
    <>
        <Box className="mr-10 ml-10 mt-10">
            <Box className="grid  grid-cols-2">
                <ContactDescription/>
                <Map />

            </Box>
        </Box>
    
    </>
    )

}
export default Contact;