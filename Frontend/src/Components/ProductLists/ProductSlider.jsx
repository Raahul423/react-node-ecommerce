import React, { useState } from 'react'
import Category from './SubProductSlider/Category'
import Avalibilty from './SubProductSlider/Avalibilty';

const ProductSlider = () => {
  const [collapseisopen, setCollapseisopen] = useState(true);
  const [availableisopen, setavailableisopen] = useState(true);

  const isopen = () => {
    setCollapseisopen(!collapseisopen);
  }

  const availableopen = () => {
    setavailableisopen(!availableisopen);
  }


  return (
    <section className='col2 w-[25%] '>
      <div className='itemlist 1/3 '>
        <Category isopen = {isopen}  collapseisopen = {collapseisopen}/>
        <Avalibilty isopen = {availableopen} availableisopen = {availableisopen} />
      </div>

      <div className='2/3 '>
        <h1 className='!text-xl'>Filter By Price</h1>
      </div>

      <div className='3/3'>

      </div>
    </section>
  )
}

export default ProductSlider
