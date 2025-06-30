import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductsDeatils from '../components/Products/ProductsDeatils'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturesSection from '../components/Products/FeaturesSection'

const similarProducts = [
  {
    _id: 1,
    name:"Product 1",
    price: 100,
    images: [{url:"https://picsum.photos/500/500?random=1"}],
  },
   {
    _id: 2,
    name:"Product 1",
    price: 100,
    images: [{url:"https://picsum.photos/500/500?random=2"}],
  },
   {
    _id: 3,
    name:"Product 1",
    price: 100,
    images: [{url:"https://picsum.photos/500/500?random=3"}],
  },
   {
    _id: 4,
    name:"Product 1",
    price: 100,
    images: [{url:"https://picsum.photos/500/500?random=4"}],
  },

]

const Home = () => {
  return (
    <div >
        <Hero/>
        <GenderCollectionSection/>
        <NewArrivals/>

        {/* Best seller */}
        <h2 className='text-3xl text-center font-bold mb-4'>Best seller</h2>
          <ProductsDeatils/>
      <div className='container mx-auto'>
        <h2 className='text-3xl text-center  font-bold mb-4'>top Wears for Women</h2>
        <ProductsDeatils product={similarProducts}/>
      </div>
      <FeaturedCollection/>
      <FeaturesSection/>
    </div>
  )
}

export default Home