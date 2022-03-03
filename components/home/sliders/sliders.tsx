import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "./slider"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Sliders from "../owlCarousel/sliders";
import {makeStyles} from "@mui/styles"
const lists = [
    {src:"/images/qeshm.jpg",title:"تهران ",id:"1"},
     {src:"/images/qeshm.jpg",title:"تهران ",id:"1"},
    {src:"/images/mashhad.jpg",title:"مشهد ",id:"2"},
    {src:"/images/kish.jpg",title:"اصفهان ",id:"3"},
    {src:"/images/shiraz.jpg",title:"شیراز ",id:"4"},
    {src:"/images/kordan.jpg",title:"کردستان ",id:"5"},
    {src:"/images/ramsar.jpg",title:"اهواز ",id:"6"},
    {src:"/images/masal.jpg",title:"رشت ",id:"7"},

]

const Sliders =  ()=>{

  const useStyles = makeStyles({
    sliderSize:{
      width:"700px",
      height:"400px"
    }
  })
  const classes = useStyles();

    return (

        <>
        <Box className="flex justify-center items-center mb-10">

       
        <Box className={`  ${classes.sliderSize}`}>

  
       
        
        <Carousel
        
        indicators={true}
        swipe={true}

       fullHeightHover={true} 
       index={1}
       
      
        >

                      {
                            lists.map((list,index)=><Slider key={index} title={list.title}  src={list.src} id={list.id} />)
                        }
              
            
            
        </Carousel>
       
           

        </Box>
        </Box>
        </>
    )

}
export default Sliders;