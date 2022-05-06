import Box from "@mui/material/Box";
import SideBar from "../../components/profile/sideBar/sideBar"
import Information from "../../components/profile/information/information"
 const InformationPage = ()=>{

    return (
        <>
         <Box className="flex ">

            <SideBar />
            <Information />
         </Box>
        </>
    )
 }
 export default InformationPage;