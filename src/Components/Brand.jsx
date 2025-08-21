import React from 'react'
import Carousel from './ui/Carousel'
import { data } from 'react-router-dom'
import { brandList } from '../data/data'

const Brand = () => {
  return (
    <section id='brand'>
    <div className='brand-images container'>
      <Carousel>

         {
            brandList.map((item, idx)=>  <img src={item.logo} alt={item.name} key={idx}/>) 
         }
      </Carousel>
    </div>
    </section>
  )
}

export default Brand