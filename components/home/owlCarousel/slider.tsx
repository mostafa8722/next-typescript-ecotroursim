import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Link from "next/link"
import customStyles from "../../../styles/Style.module.css"
import SliderImage from "./sliderImage"
import SliderTitle from "./sliderTitle"
import SliderBody from "./sliderBody"
import SliderFooter from "./sliderFooter"
import { makeStyles } from '@mui/styles';


interface Props { 
    id:string,
    title:string,
    src:string,
    location:string,
    comment:string,
    room:string,
    capacity:string,
    price:string,
}

const Slider = (props:Props)=>{
    const {src,title,id,location,comment,room,capacity,price} = props;
    const useStyles = makeStyles({
        bg: {
            width:"17vw",
            minWidth: "300px",
            maxWidth: "340px",
            borderRadius: "10px",
            boxShadow: "0 3px 6px 0 rgb(0 0 0 / 16%)",
            border: "1px solid #adadad",
            marginRight: "var(--room-box-margin-right,13%)",
            marginLeft: "var(--room-box-margin-left,3vw)",
            marginBottom: "20px",
            overflow: "unset",
            cursor: "pointer",
            outline: "none!important",
          
            position: "relative",
            backgroundColor: "#ffffff",
          
        

        },
        title:{ 
            borderBottom : "2px solid #ff2200"
        }
       
    });
    const classes = useStyles();
    return (
        <>
        <Box  className={`flex ${classes.bg}`}>
           <Link  href="/">
            <a   className={`flex flex-col `}  >
                          <SliderImage src={src} />   
                          <SliderTitle title={title} />   
                          <SliderBody location={location} comment={comment} room={room} capacity={capacity} />   
                          <SliderFooter price={price}/>   
                          
                </a>

          </Link>
       


        </Box>
        </>
    )


}
export default Slider;