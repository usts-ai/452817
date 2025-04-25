import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import TopSellers from '../components/TopSellers';
import TrendingProducts from '../components/TrendingProducts';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Categories />
        <TopSellers />
        <TrendingProducts />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
