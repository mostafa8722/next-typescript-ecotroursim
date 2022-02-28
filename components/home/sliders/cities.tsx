import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import City from "./city"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
const lists = [
    {src:"/images/qeshm.jpg",title:"تهران ",id:"1"},
    {src:"/images/mashhad.jpg",title:"مشهد ",id:"2"},
    {src:"/images/kish.jpg",title:"اصفهان ",id:"3"},
    {src:"/images/shiraz.jpg",title:"شیراز ",id:"4"},
    {src:"/images/kordan.jpg",title:"کردستان ",id:"5"},
    {src:"/images/ramsar.jpg",title:"اهواز ",id:"6"},
    {src:"/images/masal.jpg",title:"رشت ",id:"7"},
]

const Cities =  ()=>{

    return (

        <>
        <Box className="m-5">

        <Typography className="text-xl mt-2 mb-0 text-center" variant="h2" component="h2" >
            مکان های پرطرفدار

          </Typography>
          <Box >
        
        
        <Carousel
        

        indicators={false}

       fullHeightHover={true} 
       index={50}
        
        >

                      {
                            lists.map((list,index)=><City key={index} title={list.title}  src={list.src} id={list.id} />)
                        }
              
            
            
        </Carousel>
          </Box>
           

        </Box>
        
        </>
    )

}
export default Cities;