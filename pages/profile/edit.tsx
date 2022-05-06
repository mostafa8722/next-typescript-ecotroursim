import Box from "@mui/material/Box";
import SideBar from "../../components/profile/sideBar/sideBar"
import Edit from "../../components/profile/information/edit"
 const InformationPage = ()=>{

    return (
        <>
         <Box className="flex ">

            <SideBar />
            <Edit />
         </Box>
        </>
    )
 }
 export default InformationPage;