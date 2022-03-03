
import React from "react"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CommentCard from "./comment"

interface comment { 
    id: string|number,
    name :string,
    date : string,
    body : string,
    location : string,

}
const comments = ()=>{

    const lists:comment[] = [
        { id:"1",name:"نسرین اکبری" ,date : "مهر 1399",location : "توکلی (۹ تخت) نوساز نزدیک حرم، در مشهد",body:"میزبانیشون عالی بود امکانات اقامتگاه هم بیشتر از اون چیزی بود که انتظار داشتم واقعا تو این چند ساله این سفر از بهترین سفرهایم بود چون هم و" },
        {id:"2",name:"سمانه شهبازی",date : "آذر 1399",location:" کرگدن (اتاق کنج با صبحانه) کریم خان،",body:"همه چیز عالی بود.بسیار زیبا و تمیز بود. الکل همه جا در دسترس گذاشته بودند و همه جا ضدعفونی می شد و باعث می شد آدم نگرانی از این بابت"},
        {id:"3",name:"امید آداک",date:"آذر 1399",location:"کرگدن (اتاق کنج با صبحانه) کریم خان",body:"۴شب اقامت داشتم . همه چیز عالی بود. تمامی وسایل آشپزی و پخت و پز موجود بود. نظافت به خوبی رعایت شده بود. و از همه مهمتر برخورد"}
    ]
    return (
        <> 
          <Box className="flex ">
            { 
             lists.map(list =><CommentCard key={list.id} id={list.id} name={list.name} body={list.body} location={list.location} date={list.date} /> )
             }
          </Box>
        
        </>
    )

}

export default comments ;