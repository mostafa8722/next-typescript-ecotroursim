import Box from "@mui/material/Box";
import SideBar from "../../components/profile/sideBar/sideBar"
import Dashboard from "../../components/profile/dashboard/dashboard"
 const DashboardPage = ()=>{

    return (
        <>
         <Box className="flex ">

            <SideBar />
            <Dashboard />
         </Box>
        </>
    )
 }
 export default DashboardPage;