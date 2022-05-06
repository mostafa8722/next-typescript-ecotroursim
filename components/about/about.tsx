
import Box from "@mui/material/Box";
import AboutPart1 from "./aboutPart1";
import AboutPart2 from "./aboutPart2";
import AboutPart3 from "./aboutPart3";
import AboutPart4 from "./aboutPart4";

const About = ()=>{

    return (

        <>
            <Box className="flex flex-col">

              <AboutPart1 />
              <AboutPart2 />
              <AboutPart3 />
              <AboutPart4 />

            </Box>
        </>
    )
}
export default About;