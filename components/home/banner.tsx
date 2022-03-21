import Search from "./search"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import customStyles from "../../styles/Style.module.css"
const banner = ()=>{

    return (

        <Box className={`${customStyles['image-banner']}`} >
        <Box className="row  mt-3 mt3">
            <Box className="flex justify-center pt-20 w-100 mt-10">
            
                <Typography className="text-2xl text-white text-center" variant="h2" component="h2" gutterBottom>
                کومه گردی، مرجع تخصصی رزرو و اجاره اقامتگاه بوم گردی، ویلا، خانه سنتی و روستایی در شمال و سراسر ایران

                   </Typography>
            </Box>
        </Box>

        <Box className="row ">
            <Box className="col-sm-12  mt-5 flex justify-center">
                <Search/>

            </Box>
        </Box>
    </Box>
    );


}
export default banner ;