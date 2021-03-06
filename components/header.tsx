import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Link from "next/link"
import {icon} from '../utils/icons'
import Typography from "@mui/material/Typography";
import customStyles from '../styles/Style.module.css'
import Box from "@mui/material/Box";
import {useState} from "react"
import CustomMobileModal from "../app/login/customMobileModal"
import CustomCodeModal from "../app/login/customCodeModal"
import CustomInformationModal from "../app/login/customInformationModal"
import Divider from '@mui/material/Divider';

const Header : NextPage =()=>{
  const [openLogin,setOpenLogin] = useState(false)

  const handleModal = ()=>{
    setOpenLogin(!openLogin);
  }
   

  return (
    <>
           <Box>
                <Box className={` ${customStyles["header-top"]}`} >
                   <Box className="flex justify-between mr-3 mt-3">
                   <Typography className="text-4xl" variant="h1" component="div" gutterBottom>
                     کومه گردی
                   </Typography>
                       <Box>
                           <Link  href="/">
                               <a className={` ${customStyles["btn-host"]}`} >ثبت نام میزبان  </a>
                           </Link>
                           <span className="m-2 cursor-pointer">
                               {icon('support')}
                               <span className="m-r-5">پشتیبانی </span>
                           </span>
                           <span className="m-2 cursor-pointer">
                               {icon('mobile')}
                               <span className="m-r-5">دانلود اپلیکیشن </span>
                           </span>
                           <span onClick={handleModal} className="m-2 cursor-pointer">
                               {icon('Login')}
                               <span>ورود / ثبت نام</span>
                           </span>

                       </Box>

                   </Box>


                </Box>

                <CustomInformationModal
                
                open={openLogin}
                handleClose={handleModal}
                />

            <Divider />

            </Box>
    </>
  )
}
export default Header;
