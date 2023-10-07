import About from '@/app/Components/About';
import Campaigns from '@/app/Components/Campaigns';
import Carousel from '@/app/Components/Carousel';
import Customers from '@/app/Components/Customers/Customers';
import MenuWrapper from '@/app/Components/Product/MenuWrapper';
import Reservation from '@/app/Components/Reservation';
import Head from 'next/head';
import React from 'react'

const HomePage = () => {
  return (
    <>
   <React.Fragment>
    <Carousel></Carousel>
    <Campaigns></Campaigns>
    <MenuWrapper></MenuWrapper>
    <About></About>
    <Reservation></Reservation>
    <Customers></Customers>
   </React.Fragment>
    </>
  )
}

export default HomePage;