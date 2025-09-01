import React from 'react'
import HeroAndBrandLogos from './HeroAndBrandLogos/HeroAndBrandLogos';
import ProductsCategories from './ProductsCategories/ProductsCategories';
import PromoBanners from './PromoBanners/PromoBanners';
import AllProducts from './AllProducts/AllProducts';
import Brands from './Brands/Brands';
import FeaturedItems from './FeaturedItems/FeaturedItems';
import ProductsByCategory from './ProductByCategories/ProductsByCategory';

const HomePageComponent = () => {
  return (
    <section className='py-6 space-y-6 md:space-y-12'>
      <HeroAndBrandLogos />
      <ProductsCategories />
      <PromoBanners />
      <AllProducts />
      <Brands />
      <FeaturedItems />
      <Brands />
      <ProductsByCategory />
    </section>
  )
}

export default HomePageComponent;