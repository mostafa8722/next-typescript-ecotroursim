import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Header from '../components/header'
import {connect} from "react-redux";
import Banner from '../components/home/banner'
import Benefits from '../components/home/benefits'
const index : NextPage =()=>{



   
  return (
    <>
      <div>
     
       <Banner />
       <Benefits />
  
      
      </div>
    </>
  )
}
const mapStateToProps = (state:any)=>{
   
  console.log(state)
  return {
   
  }
}
export default connect(mapStateToProps)( index);

