import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import City from "./city"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import {useState} from "react"
import dynamic from 'next/dynamic'
import CustomCarousel from "../customCarousel"
import { styled } from "@mui/system";


const lists = [
    {src:"/images/qeshm.jpg",title:"تهران ",id:"1"},
    {src:"/images/mashhad.jpg",title:"مشهد ",id:"2"},
    {src:"/images/kish.jpg",title:"اصفهان ",id:"3"},
    {src:"/images/shiraz.jpg",title:"شیراز ",id:"4"},
    {src:"/images/kordan.jpg",title:"کردستان ",id:"5"},
    {src:"/images/ramsar.jpg",title:"اهواز ",id:"6"},
    {src:"/images/masal.jpg",title:"رشت ",id:"7"},
]
const Scroll = dynamic(
    () => import('./owlCarousel'),
    { ssr: false }
  );
  type ComponentProps = {
    isPhone?: boolean;
      justifyContent?: string;
  };
  export const Item = styled("div")<ComponentProps>(
    ({ isPhone }) => `
        
              display:flex;
              flex-direction:column;
              align-items:center;
              justify-content:center;
              width:${isPhone ? "80px" : "180px"};
              height:${isPhone ? "110px" : "230px"};
              padding:1%;
              margin:0.5%;
              border-radius:50%;
              cursor:pointer;
                    `
  );
const Cities =  ()=>{

    const [showLists,setShowLists] =useState( [
        {src:"/images/qeshm.jpg",title:"تهران ",id:"1"},
        {src:"/images/mashhad.jpg",title:"مشهد ",id:"2"},
        {src:"/images/kish.jpg",title:"اصفهان ",id:"3"},
        {src:"/images/shiraz.jpg",title:"شیراز ",id:"4"},
        {src:"/images/kordan.jpg",title:"کردستان ",id:"5"},
        
    ])
    let items =
    lists &&
    lists.map((list: any, i: number) => {
      return (
        <Item
          key={i}
          isPhone={false}
          onClick={() => {
          //  Router.push("/shop/" + x._id);
          }}
        >
            <City key={i} title={list.title}  src={list.src} id={list.id} />

        </Item>
      );
    });
    return (

        <>
        <Box className="m-5">

        <Typography className="text-xl mt-2 mb-0 text-center" variant="h2" component="h2" >
            مکان های پرطرفدار

          </Typography>
          <Box >
          
        <Scroll/>
        <CustomCarousel   count={5} arrowSize={60} items={items} />
   
          </Box>
           

        </Box>
        
        </>
    )

}
export default Cities;