import Box from "@mui/material/Box";
import Reserve from "./reserve"
import Content from "./content"


const Contents = ()=>{

return (
    <>
        <Box className="grid grid-cols-3  ">
            <Content />
            <Reserve />
        </Box>
    </>
)

}

export default Contents;