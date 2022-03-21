import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';



const Location = ()=>{

    const useStyles = makeStyles({

        code :{
            borderRadius :10, 
            padding:"7px 12px",
            backgroundColor : "#FF5733",
        },
        reserve : {
            borderRadius :10, 
            padding:"7px 12px",
            backgroundColor : "#eeeeee",
        },
        starSection : {
            borderRadius :10, 
            padding:"7px 12px",
            backgroundColor : "#7a8288",
        },
        star : {
           color:"#ffffff",
           fontSize :20
        },
        starActive:{
            color:"#f0c807"
        }
    })

    const classes = useStyles();

return (
    <>
          <Box className="flex mt-5 mr-10">
              <Box className={`${classes.code} flex`} >
              <Typography className={`text-sm  ml-1 `} variant="h2" component="h2" >
                 کد:
            </Typography>
            <Typography className={`text-sm  `} variant="h2" component="h2" >
                  123456789
            </Typography>
              </Box>

              <Box className={`${classes.reserve} flex mr-3`} >
                <Typography className={`text-sm  ml-1 `} variant="h2" component="h2" >
                    +20
                </Typography>
                <Typography className={`text-sm  `} variant="h2" component="h2" >
                رزرو موفق
                </Typography>
              </Box>

              <Box className={`${classes.starSection} flex flex-row-reverse mr-3`} >
               
                <StarIcon className={`  ${classes.star} ${classes.starActive}`} />
                <StarIcon className={`  ${classes.star} ${classes.starActive}`} />
                <StarIcon className={`  ${classes.star} ${classes.starActive}`} />
                <StarIcon className={`  ${classes.star} ${classes.starActive}`} />
                <StarIcon className={`  ${classes.star} `} />
                
                <Typography className={`text-sm  ml-1 `} variant="h2" component="h2" >
                  4.3
                </Typography>
              </Box>

           
          </Box>
    </>
)

}

export default Location;