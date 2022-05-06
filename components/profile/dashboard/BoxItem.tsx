import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles} from "@mui/styles"



interface Props{
    title ?:string,
    count ?:number,
    Icon ?: any,
    color?:string
}
const BoxItem  = (props:Props)=>{
    const {title,count,color,Icon} = props;

        const useStyles = makeStyles({
      
            box:{
                boxShadow: "0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f",
                borderRadius:6,
                height:100,
                width:200,
                backgroundColor:"#ffffff",
                padding:"5px 10px"
               
               },
            
               styled:{},
               icon:{
        
                   top:"-10px",
                   left:"-10px",
                   backgroundColor:color,
                   height:50,
                   width:50,
                   borderRadius:5,
                   textAlign:"center",
                   lineHeight : "50px"
                   
               }
    
        })
        const classes = useStyles()

        return (
            <>
                <Box className={`${classes.box}  relative mr-2 ml-2 mt-2`}>
                    <Box className={`absolute ${classes.icon}`}>
                        <Icon className={`text-white`} />

                    </Box>
                    <Box className={`flex flex-col justify-end`} >
                    <Typography className={`text-base text-blue-900  mt-3 mr-2   ${classes.styled}  `} variant="h2" component="h2" >
                         {title}
                         </Typography>
                         <Typography className={`text-base text-blue-900 font-bold mt-3 mr-2   ${classes.styled}  `} variant="h2" component="h2" >
                         {count}
                         </Typography>
                    </Box>
                </Box>
            
            </>
        )

    }
    export default BoxItem;