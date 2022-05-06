import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles} from "@mui/styles"


import RocketIcon from '@mui/icons-material/Rocket';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Item from "./item"
import {useState} from  "react"

const SideBar = ()=>{

    const useStyles = makeStyles({
        root :{
          width:300,
          backgroundColor :"#ffffff",
          minHeight :300,
        },
        box:{
            boxShadow: "0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f",
            height:45,
            width:"80%",
            borderRadius:5,
           }
    })
    const classes = useStyles()

    const [listItems,setListItems] = useState(
        [
            {title :" داشبورد",icon :RocketIcon ,showChild:false,hasChild:false,childs:[]},
            {title :"سفارش ها ",icon :RocketIcon ,showChild:false,hasChild:true,childs:[{title:"مشاهده ",link:"/admin/orders"}]},
            {title :"کاربران",icon :RocketIcon ,showChild:false,hasChild:true,childs:[{title:"مشاهده  ",link:"/admin/users"},{title:"افزودن",link:"/admin/user/add"}]},
            {title :" اطلاعات مالی",icon :RocketIcon ,showChild:false,hasChild:true,childs:[{title:"تراکنش ها ",link:"پرداخت ها "},{title:"پرداختی ها",link:""}]},
            {title :"خروج",icon :ExitToAppIcon ,showChild:false,hasChild:false,childs:[{title:"تراکنش ها ",link:"پرداخت ها "},{title:"پرداختی ها",link:""}]},
        ]
    );

    const handleClick = (index:number)=>{
        console.log(44)
        let initList = 
        listItems.map((item,i)=>{
             if(i==index){
                  item.showChild = !item.showChild
             }else{
               item.showChild = false  
             }
             return item ;
           
         })
         setListItems(initList);
       
    }
    return (
        <>
            <Box className={`flex flex-col mr-10 mt-10 ${classes.root}`}>
             {
                 listItems.map((item,index) =>
                  <Item 
                 key={index}
                   title={item.title}
                   handleClick={()=>handleClick(index)}
                   Icon ={item.icon}
                   showChild={item.showChild} 
                   hasChild={item.hasChild} 
                   childs={item.childs} 
                     />)

             }
             
                   
            </Box>
        </>
    )

}
export default SideBar;