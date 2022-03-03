import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link"
import custumStyles from '../styles/Style.module.css'
import {makeStyles} from "@mui/styles";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';


    const useStyles = makeStyles({
        link: {
          
           color: "#5f2cfb"
  
          },
          app:{
            
            borderRadius:"20px",
            background: "#ffffff",
            '& > *' : {
                color: '#ff2200',
                fontWeight: 600
            }
              
          }
         
      });
 

  
   const Footer =()=>{
    const classes = useStyles();
  return (
    <>
      <Box className={`md:flex md:justify-around pt-10 pb-5 ${custumStyles.bgFooter}`}>

       <Box  className="mt-4">
       <Typography className="text-2xl font-bold mt-2 mb-0 text-ce" variant="h2" component="h2" >
         کومه گردی
      </Typography>
       </Box>
       <Box className="flex col flex-col" >
            <Box>
                <Link  href="/">
                    <a className={`mt-3 ${classes.link}`} > سوالات متداول </a>
                </Link>
            </Box>
           
            <Box className="mt-2">
                <Link  href="/">
                    <a className={`mt-3 flex ${classes.link}`} >قوانین و مقررات رزرو </a>
                </Link>
             </Box >
             <Box className="mt-4">
                <Link  href="/">
                    <a className={`mt-3 ${classes.link}`} > قوانین و راهنمای میزبان </a>
                </Link>
             </Box>
           
           
            <Box className="mt-4">
                <Link  href="/">
                    <a className={`mt-3 ${classes.link}`} > وبلاگ  </a>
                </Link>

            </Box>  
           
          
           

       </Box>
       <Box className="flex col flex-col" >

            <Box>
                <Link  href="/">
                    <a className={`mt-3 ${classes.link}`} > تماس با ما  </a>
                </Link>

            </Box>
          
            <Box className="mt-4">
                <Link  href="/">
                    <a className={`mt-3 ${classes.link}`} > درباره ی ما   </a>
                </Link>

            </Box>
           
            <Box className="mt-4">
                <Link  href="/">
                    <a className={`mt-3 ${classes.link}`} >  میزبان شوید  </a>
                </Link>

            </Box> 
        <Typography className="text-base font-bold mt-5 mb-0 " variant="h2" component="h2" >
            شبکه های اجتماعی 
        </Typography> 
        <Box className="mt-4 flex">
            <a href="" className="mr-2 ml-2" target="_blank" >
                <LinkedInIcon />
            </a>
            <a href="" className="mr-2 ml-2" target="_blank" >
                <InstagramIcon />
            </a>
             <a href="" className="mr-2 ml-2" target="_blank" >
                <TwitterIcon />
            </a>

        </Box>

        <Box className="flex mt-4">
            <PhoneEnabledIcon />
        <Typography className="text-base  mr-2 mb-0 " variant="h2" component="span" >
          راه های تماس  
        </Typography>
        <Typography className="text-base  mr-2 mb-0 " variant="h2" component="span" >
         09118448204
        </Typography>

        </Box>
       


       </Box>
       <Box className="flex flex-col" >
       <Typography className="text-xl font-bold mt-2 mb-0 text-ce" variant="h2" component="h2" >
          دانلود اپلیکیشن کومه گردی
      </Typography>

        <a href="#" className={` flex items-center justify-center pt-3 pb-3 mt-4 ${classes.app}`}>
        <Typography className="text-base  mr-2 mb-0 " variant="h2" component="span" >
             دانلود اپلیکیشن اندروید
        </Typography>
        <ShopIcon />
        </a>
        <a href="#" className={` flex items-center justify-center pt-3 pb-3 mt-4 ${classes.app}`}>
        <Typography className="text-base  mr-2 mb-0 " variant="h2" component="span" >
             دانلود اپلیکیشن ای او اس
        </Typography>
        <AppleIcon />
        </a>
       </Box>
      </Box>
    </>
  )
}
export default Footer;
