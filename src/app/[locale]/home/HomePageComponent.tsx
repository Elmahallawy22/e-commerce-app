import React from 'react'
import HeroAndBrandLogos from './HeroAndBrandLogos/HeroAndBrandLogos';
import ProductsCategories from './ProductsCategories/ProductsCategories';
import PromoBanners from './PromoBanners/PromoBanners';
import AllProducts from './AllProducts/AllProducts';
import Brands from './Brands/Brands';
import FeaturedItems from './FeaturedItems/FeaturedItems';

const HomePageComponent = () => {
  return (
    <section className='pt-6 space-y-6 md:space-y-12'>
      <HeroAndBrandLogos />
      <ProductsCategories />
      <PromoBanners />
      <AllProducts />
      <Brands />
      <FeaturedItems />
      <Brands />
    </section>
  )
}

export default HomePageComponent;