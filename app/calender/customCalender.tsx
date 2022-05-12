import * as moment from 'jalali-moment';
import { styled } from "@mui/system";

import { makeStyles } from "@mui/styles";




const TableCalender = styled("div")`
display:flex;
flex-direction:column
`

const TableTitle = styled("div")`
display:grid;
grid-template-columns:repeat(7,1fr);
`

const DayColumn = styled("span")`
height:40px;
padding: 10px 10px;
text-align:center;
`

const Tablecontent = styled("div")`
display:grid;
grid-template-columns : repeat(7,1fr) ;
grid-template-rows : repeat(5,1fr) ;
`




const CustomCalender = () =>{
    const useStyles = makeStyles({
        offDay:{
            color:"#ff2200"
        }
    })
    
    const classes = useStyles();

    const dayName = [
        "شنبه ","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"
    ];

    let dayweek :any;
    let curDate = new Date();
    let curDay:any = moment.from().locale('fa').format('D');

    curDate.setDate( curDate.getDate() - curDay +1 );

    dayweek = curDate.getDay();

   

    const days =  Array.from(Array(30+dayweek+1), (_, index) => index + 1 -dayweek);
    return (
        <TableCalender>
                        <TableTitle>
                            {dayName.map((item,index)=><DayColumn key={index} >{item}</DayColumn>)}

                        </TableTitle>
                        <Tablecontent>
                            {days.map((item,index)=>{
                               
                                if(item > 1){
                                    return <DayColumn className={(item-dayweek+1) %7==0?classes.offDay:""} key={index} >{item-1}</DayColumn>

                                }else {
                                    return <DayColumn className={item-dayweek-1 %7==0?classes.offDay:""} key={index} ></DayColumn>

                                }
                               
                            })}

                        </Tablecontent>


                    </TableCalender>

                 
    )
     
}
export default CustomCalender;