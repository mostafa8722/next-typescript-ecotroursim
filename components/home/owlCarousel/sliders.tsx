import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SliderCard from "./slider"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import {useState} from "react"
import dynamic from 'next/dynamic'
import CustomCarousel from "../customCarousel"
import { styled } from "@mui/system";
import Title from "./sectionTitle"

interface Arr { 
  id:string,
  title:string,
  location:string,
  src :string,
  comment:string,
  room:string,
  capacity:string,
  price:string,
}
const lists:Arr[] = [
    {src:"/images/slider1.png",title:"اجاره خانه مبله پاسداران در تهران",location:"خانه در تهران",room:"2",capacity:"2",price:"2000000",id:"1",comment:"2"},
    {src:"/images/slider2.png",title:"اجاره هاستل حراتیج (3 نفره خانواده- دوم) در اصفهان",location:"هاستل در اصفهان",room:"3",capacity:"3",price:"3000000",id:"2",comment:"2"},
    {src:"/images/slider3.png",title:"اجاره هاستل حراتیج (اتاق خوابگاهی ۱۲ تخته بانوان) در اصفهان",location:"خانه در تهران",room:"2",capacity:"4",price:"4000000",id:"3",comment:"2"},
    {src:"/images/slider4.png",title:"اجاره هاستل حراتیج(دو نفره استاندارد چهارم) در اصفهان",location:"هاستل در مشهد",room:"3",capacity:"5",price:"8000000",id:"4",comment:"2"},
    {src:"/images/slider5.png",title:"اجاره سوییت باغ سرهنگ(سه نفرهVIP) در بابل",location:"اجاره هتل آپارتمان نزدیک حرم (رویال 402) در مشهد",room:"2",capacity:"6",price:"5000000",id:"5",comment:"2"},
    {src:"/images/slider6.png",title:"اجاره هاستل حراتیج (اتاق خوابگاهی ۴ تخته کپسول) در اصفهان",location:"ویلا در مشهد",room:"4",capacity:"7",price:"6000000",id:"6",comment:"2"},
  
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
              width:${isPhone ? "80px" : "300px"};
              height:${isPhone ? "110px" : "400px"};
              padding:1%;
              margin:0.5%;
              border-radius:50%;
              cursor:pointer;
                    `
  );
const Sliders =  ()=>{

   
    let items =
    lists &&
    lists.map((list: Arr, i: number) => {
      return (
        <Item
          key={i}
          isPhone={false}
          onClick={() => {
          //  Router.push("/shop/" + x._id);
          }}
        >
            <SliderCard 
            key={i}
            title={list.title}
            location={list.location}
            comment={list.comment}
            room={list.room}
            capacity={list.capacity}
            src={list.src}
            price={list.price}
            id={list.id}
             />

        </Item>
      );
    });
    return (

        <>
        <Box className="mt-5 mb-5">

          <Title />
          
          <Box >
          
   
        <CustomCarousel   count={3} arrowSize={60} items={items} />
   
          </Box>
           

        </Box>
        
        </>
    )

}
export default Sliders;