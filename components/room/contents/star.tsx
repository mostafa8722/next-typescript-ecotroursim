import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Box from "@mui/material/Box";
interface Props {
    star1: number,  // 0 empty , 1 halfStar , 2 fullStar
    star2: number, // 0 empty , 1 halfStar , 2 fullStar
    star3: number,// 0 empty , 1 halfStar , 2 fullStar
    star4: number,// 0 empty , 1 halfStar , 2 fullStar
    star5: number,// 0 empty , 1 halfStar , 2 fullStar
    size:number,
}
const Star = (props:Props)=>{

    const {star1,star2,star3, star4, star5,size} = props;
    const useStyles = makeStyles({
        
        star : {
           color:"#eeeeee",
           fontSize :size,
           
        },
        starActive:{
            color:"#f0c807"
        }
    })

    const StarIc=(star:number)=>{

        switch(star){
           
            case 1 :
              return   <StarHalfIcon className={`  ${classes.star} ${classes.starActive}`} />
            break;
            case 2 :
            return     <StarIcon className={`  ${classes.star} ${classes.starActive}`} />
            break;
            defualt :
              return   <StarIcon className={`  ${classes.star} `} />
            break;
        }
    }
    const classes = useStyles();

    return(
        <>
         <Box className="flex  flex-row-reverse ">
            {StarIc(star1)}
            {StarIc(star2)}
            {StarIc(star3)}
            {StarIc(star4)}
            {StarIc(star5)}
         </Box>
        
        </>
    )
}
export default Star;