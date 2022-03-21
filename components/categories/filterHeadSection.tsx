import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import {makeStyles} from "@mui/styles"
import {useState} from "react"

const FilterHeadSection = ()=>{

    const [activeType,setActiveType] = useState("type1")

    const useStyles = makeStyles({
        active :{
            background:"#ff2200",
            color:"#ffffff",
            '&:hover' : {
                background:"#ff2200",
                color:"#ffffff",
            }
        }
    })

    const classes = useStyles();

    return (
        <>
        <Box className="flex ">
        <Typography className=" mr-4 text-base  text-right" variant="h4" component="span" gutterBottom>
              
             مرتب سازی با اولویت : 
        </Typography>

        <Button className={ ` mr-2 ${activeType=="type1"?classes.active:""}`} variant="text">پیشنهاد کومه گردی</Button>
        <Button className={ ` mr-2 ${activeType=="type2"?classes.active:""}`}  variant="text">بهترین های اخیر</Button>
        <Button className={ ` mr-2 ${activeType=="type3"?classes.active:""}`} variant="text">بیشترین قیمت </Button>
        <Button className={ ` mr-2 ${activeType=="type4"?classes.active:""}`} variant="text">کمترین قیمت </Button>

        </Box>
        </>
    );

}
export default FilterHeadSection;