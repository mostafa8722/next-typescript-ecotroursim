import Box from "@mui/material/Box";
import Products from "../products/products"
import FilterHeadSection from "./filterHeadSection"
import FilterSection from "./filterSection"
const Categories = ()=>{
    return (
        <>
            <Box className="flex mt-5  pr-5 ">
                <FilterSection />
              <Box className="mr-1">
              <Box className="flex flex-col mr-5  ">
                
                <FilterHeadSection/>
                <Products />

            </Box>
              </Box>

            </Box>
        </>
    );

}
export default Categories;