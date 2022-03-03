import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Header from '../components/header'
import {connect} from "react-redux";
import Banner from '../components/home/banner'
import Benefits from '../components/home/benefits/benefits'
import Cats from '../components/home/cats/cats'
import Cities from '../components/home/cities/cities'
import Comments from '../components/home/comments/comments'
import Banners from '../components/home/banners/banners'
import Sliders from '../components/home/owlCarousel/sliders'
import Descriptions from '../components/home/descriptions/descriptions'
import Sliders2 from '../components/home/sliders/sliders'


const index : NextPage =()=>{



   
  return (
    <>
      <div>
     
       <Banner />
       <Benefits />
       <Cats />
       <Cities />
       <Comments />
       <Sliders />
       <Sliders2 />
       <Banners />
       <Descriptions />
  
   
      
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

