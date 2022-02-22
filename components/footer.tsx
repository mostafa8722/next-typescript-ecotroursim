import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link"
import custumStyles from '../styles/Style.module.css'


const Footer : NextPage =()=>{

  
   
  const changeState = ()=>{
   
  }
  return (
    <>
      <Box className={`md:flex md:justify-around ${custumStyles.bgFooter}`}>

       <Box  className="mt-4">
       <Typography variant="h4" component="div" gutterBottom>
         کومه گردی
      </Typography>
       </Box>
       <Box className="flex col flex-col" >
       <Link  href="/">
                            <a className="mt-2" >قوانین و مقررات رزرو </a>
                        </Link>
       <Link   href="/">
                            <a className="mt-2" >قوانین و مقررات رزرو </a>
                        </Link>

       </Box>
       <Box className="flex col flex-col" >
       <Link   href="/">
                            <a className="mt-2" >قوانین و مقررات رزرو </a>
                        </Link>
       <Link  href="/">
                <a className="mt-2"  >قوانین و مقررات رزرو </a>
       </Link>

       </Box>
       <Box >
       <Typography variant="h2" component="div" gutterBottom>
         کومه گردی
      </Typography>
       </Box>
      </Box>
    </>
  )
}
export default Footer;
