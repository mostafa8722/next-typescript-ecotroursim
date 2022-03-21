import Box from "@mui/material/Box";

import React from "react"
import { useRouter } from 'next/router'

import Categories from "../../../components/categories/categories"

const cats = (props:any)=>{

    const router = useRouter();

    React.useEffect(() => {
        if(!router.isReady) return;
        console.log('DATA')
        console.log(router.query)
      }, [router.isReady])

   



    return (

        <>
          <Box>
            
               <Categories />
          </Box>
        
        </>
    )

}

export default cats;