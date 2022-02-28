import Box from "@mui/material/Box";
import Cat from "./cat"
const lists:Array = [
    {id:"1",title:"اقامتگاه و بومگردی",src:"/images/cat1.jpg"},
    {id:"2",title:"بوتیک هتل و هتل سنتی",src:"/images/cat1.jpg"},
    {id:"3",title:"آب درمانی ",src:"/images/cat1.jpg"}
]
const cats = ()=>{
    return (
    <>
    <Box className="flex ">
       
      {
      lists.map((list,index)=><Cat  key={index} title={list.title} id={list.id} src={list.src} />)
      }
    </Box>
    </>
    );
}
export default cats;