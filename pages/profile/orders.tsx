import Box from "@mui/material/Box";
import SideBar from "../../components/profile/sideBar/sideBar"
import Orders from "../../components/profile/orders/orders"
 const OrderPage = ()=>{

    return (
        <>
         <Box className="flex ">

            <SideBar />
            <Orders />
         </Box>
        </>
    )
 }
 export default OrderPage;