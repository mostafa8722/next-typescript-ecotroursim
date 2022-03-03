import React from "react"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link"
import {icon} from "../../../utils/icons"
import CommentTitle from "./commentTitle"
import CommentBody from "./commentBody"
import CommentFooter from "./commentFooter"
import customStyles from "../../../styles/Style.module.css"

interface Props {
    id: string|number,
    name :string,
    date : string,
    body : string,
    location : string,
}
const comment = (props:Props)=>{
    const {id,name,date,body,location} = props;

    return (
        <>
          <Box >
              <Box className={`flex flex-col ${customStyles["box-comment"]}`}>
                 <CommentTitle name={name} date={date} />
                 <CommentBody body={body} />
                 <CommentFooter location={location}  />
                 
                  

              </Box>
          </Box>
        </>
    )
}
export default comment;