import Box from "@mui/material/Box";
import SideBar from "../../../components/admin/sideBar/sideBar"
import Orders from "../../../components/admin/orders/orders"
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