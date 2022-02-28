import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import City from "./city"
const lists = [
    {src:"/images/qeshm.jpg",title:"تهران ",id:"1"},
    {src:"/images/mashhad.jpg",title:"مشهد ",id:"2"},
    {src:"/images/kish.jpg",title:"اصفهان ",id:"3"},
    {src:"/images/shiraz.jpg",title:"شیراز ",id:"4"},
    {src:"/images/kordan.jpg",title:"کردستان ",id:"5"},
    {src:"/images/ramsar.jpg",title:"اهواز ",id:"6"},
    {src:"/images/masal.jpg",title:"رشت ",id:"7"},
]
const CustomOwlCarousel = ()=>{
    const res = {
        0: {
          items: 1
        },
        450: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 6
        },
        1400: {
          items: 7
        }
      };
      
    return <OwlCarousel items={5} margin={8} autoplay ={false} 
    
       className="owl-theme nav-btn"
          loop={false}
          startPosition={1}
          slideBy={1}
          dots={false}
          nav={true}
          navText={[
            "<span class='material-icons'>keyboard_arrow_left</span>",
            "<span class='material-icons'>keyboard_arrow_right</span>"
          ]}
          responsive={res}
         
    >  
    {
                lists.map((list,index:number)=><City key={index} title={list.title}  src={list.src} id={list.id} />)
              }
</OwlCarousel> 
}
export default  CustomOwlCarousel;