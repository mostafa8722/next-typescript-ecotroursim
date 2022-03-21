
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles} from "@mui/styles"

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


interface Props {
    title?: string,
    paragraph?:string,
    showParagraph?:boolean,
    handleClick?:any

}

const Faq = (props:Props) =>{

    const { title,paragraph , showParagraph,handleClick }  =  props;

    const useStyles = makeStyles({
        box:{
            boxShadow: "0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f",
            minHeight:45,
            borderRadius:5,
           }
    })

    const classes =  useStyles();

    return (
        <>
          <Box className={`${classes.box} mt-3`} >
                <Box  onClick={handleClick} className="flex justify-between cursor-pointer" >
                    <Typography className={`text-base font-bold mt-3 mr-5    `} variant="h2" component="h2" >
                         {title}
                    </Typography>
                    {
                        showParagraph?
                        <KeyboardArrowUpIcon className="mr-5 ml-5 mt-3" />
                        :
                        <KeyboardArrowDownIcon className="mr-5 ml-5 mt-3" />
                    }
                   
                </Box>

                <Box className={`${showParagraph?"block":"hidden"}`}>
                    <Typography className={`text-sm  leading-7 text-justify mt-3 mr-5 ml-5    `} variant="h2" component="p" paragraph={true}>
                        {paragraph}
                    </Typography>
                </Box>

          </Box>
        </>
    )
}

export default Faq;