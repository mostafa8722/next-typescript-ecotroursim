import Box from "@mui/material/Box";
import CustomImageViewer from "../../customImageViewer"
import {makeStyles} from "@mui/styles"

interface Arr { 
    id:string,
    src :string,
  }
  const lists:Arr[] = [
      {src:"/images/slider1.png",id:"1"},
      {src:"/images/slider2.png",id:"2"},
      {src:"/images/slider3.png",id:"3"},
      {src:"/images/slider4.png",id:"4"},
      {src:"/images/slider5.png",id:"5"},
      {src:"/images/slider6.png",id:"6"},
    
  ]
    const Slider = ()=>{

        const useStyles = makeStyles({
            large: {
               
               borderRadius:"10px!important"
                
        
            },
        
            small: {
               
               borderRadius:"10px!important",
              
                
        
            },
           
        });
        const classes = useStyles();
        return (

            <>
            <Box className="grid place-items-center ">
                <Box className="grid  grid-cols-2 mt-2 mb-2 gap-2">
                    <Box >
                    <CustomImageViewer
                    src={lists[0].src}
                    className={classes.large}
                    height={350}
                    width={550}
                    objectFit="cover"
                    onClick={() => {
                      
                    }}
                />
                    </Box>
                    <Box className="grid grid-cols-2 gap-2">

                 <CustomImageViewer
                    src={lists[1].src}
                    className={classes.small}
                    height={100}
                    width={200}
                    objectFit="cover"
                    onClick={() => {
                      
                    }}
                />
                 <CustomImageViewer
                    src={lists[2].src}
                    className={classes.small}
                    height={100}
                    width={200}
                    objectFit="cover"
                    onClick={() => {
                      
                    }}
                />
                 <CustomImageViewer
                    src={lists[3].src}
                    className={classes.small}
                    height={100}
                    width={200}
                    objectFit="cover"
                    onClick={() => {
                      
                    }}
                />
                 <CustomImageViewer
                    src={lists[4].src}
                    className={classes.small}
                    height={100}
                    width={200}
                    objectFit="cover"
                    onClick={() => {
                      
                    }}
                />
                    </Box>
                </Box> 
            </Box>
            </>
        );



    }

    export default Slider;