import Box from "@mui/material/Box";
import customStyles from "../../../styles/Style.module.css"
import Image from 'next/image'
import Typography from "@mui/material/Typography";
import Link from "next/link"
import {icon} from '../../../utils/icons'



interface Props { 
src : string,
title : string,
id :string,
}
const Cat = (props:Props)=>{

    const {src,title,id} = props;
    return (

    <>
      <Box className={customStyles["home-cat-box"]}>
          <Box className="flex  mr-2">

              {src?    <Image
              src={src}
              alt="کومه گردی"
              width={60}
              height={60}
          />: <></>}

          <Box className="flex flex-col mr-3">
          <Typography className="text-xl mt-2 mb-0 text-center" variant="h2" component="h2" paragraph={true}>
             {title}

          </Typography>

          <Link  href="/">
                            <a className={`flex items-center justify-center ${customStyles["view-cat-link"]}`} >
                                
                                <Box className="ml-1">مشاهده</Box>
                                   {icon('arrowLeft')}  </a>

                        </Link>
          </Box>

          </Box>

      </Box>
    </>
    );
}
export default Cat;