import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TrendingProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tous');
  
  const tabs = [
    { id: 'tous', label: 'Tous' },
    { id: 'nouveautes', label: 'Nouveautés' },
    { id: 'populaires', label: 'Populaires' },
    { id: 'promotions', label: 'Promotions' }
  ];
  
  const products = [
    {
      id: 1,
      name: 'Panier de légumes bio',
      price: 29.90,
      oldPrice: 34.90,
      image: 'https://images.unsplash.com/photo-1576021182211-9ea8dced3690?q=80&w=1974&auto=format&fit=crop',
      category: 'Fruits & Légumes',
      seller: 'Ferme du Soleil',
      rating: 4.8,
      isNew: true,
      isPromotion: true,
      isPopular: true,
      discount: '-15%'
    },
    {
      id: 2,
      name: 'Assortiment de fromages',
      price: 24.50,
      oldPrice: null,
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=1769&auto=format&fit=crop',
      category: 'Produits Laitiers',
      seller: 'Fromagerie Duval',
      rating: 4.9,
      isNew: false,
      isPromotion: false,
      isPopular: true,
      discount: null
    },
    {
      id: 3,
      name: 'Pain au levain traditionnel',
      price: 5.90,
      oldPrice: null,
      image: 'https://images.unsplash.com/photo-1600398138861-c2c713738307?q=80&w=1974&auto=format&fit=crop',
      category: 'Boulangerie',
      seller: 'Boulangerie Moreau',
      rating: 4.7,
      isNew: true,
      isPromotion: false,
      isPopular: false,
      discount: null
    },
    {
      id: 4,
      name: 'Vin rouge bio "Terroiriste"',
      price: 19.90,
      oldPrice: 23.90,
      image: 'https://images.unsplash.com/photo-1580043621114-aa190b7a1e9f?q=80&w=1770&auto=format&fit=crop',
      category: 'Boissons',
      seller: 'Domaine Lavigne',
      rating: 4.6,
      isNew: false,
      isPromotion: true,
      isPopular: true,
      discount: '-17%'
    },
    {
      id: 5,
      name: 'Miel de lavande artisanal',
      price: 12.50,
      oldPrice: null,
      image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1780&auto=format&fit=crop',
      category: 'Produits Locaux',
      seller: 'Rucher des Alpes',
      rating: 4.9,
      isNew: true,
      isPromotion: false,
      isPopular: true,
      discount: null
    },
    {
      id: 6,
      name: 'Charcuterie traditionnelle',
      price: 17.80,
      oldPrice: 22.50,
      image: 'https://images.unsplash.com/photo-1541013406133-94ed77ee8ba8?q=80&w=1770&auto=format&fit=crop',
      category: 'Viandes',
      seller: 'Maison Lefebvre',
      rating: 4.7,
      isNew: false,
      isPromotion: true,
      isPopular: false,
      discount: '-20%'
    },
    {
      id: 7,
      name: 'Confiture de fraises maison',
      price: 7.90,
      oldPrice: null,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1854&auto=format&fit=crop',
      category: 'Produits Locaux',
      seller: 'Délices du Verger',
      rating: 4.8,
      isNew: true,
      isPromotion: false,
      isPopular: false,
      discount: null
    },
    {
      id: 8,
      name: 'Huile d\'olive vierge extra',
      price: 14.90,
      oldPrice: 18.50,
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1773&auto=format&fit=crop',
      category: 'Produits Locaux',
      seller: 'Moulin Provenço',
      rating: 4.9,
      isNew: false,
      isPromotion: true,
      isPopular: true,
      discount: '-20%'
    }
  ];
  
  const filteredProducts = activeTab === 'tous' 
    ? products 
    : activeTab === 'nouveautes' 
      ? products.filter(p => p.isNew) 
      : activeTab === 'populaires' 
        ? products.filter(p => p.isPopular) 
        : products.filter(p => p.isPromotion);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Produits tendances
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection de produits du moment, directement de nos producteurs vers votre table
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-[#E60023] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          key={activeTab} // Rerender animation when tab changes
        >
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id}
              variants={item}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-52 overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-[#E60023] text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}
                  </div>
                )}
                
                {/* New Badge */}
                {product.isNew && (
                  <div className="absolute top-3 right-3 bg-[#4CAF50] text-white text-xs font-bold px-2 py-1 rounded">
                    Nouveau
                  </div>
                )}
                
                {/* Quick Actions */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-2 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center">
                  <span className="text-sm font-medium">{product.category}</span>
                  <div className="flex gap-2">
                    <motion.button 
                      className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                    <motion.button 
                      className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <div className="mb-2 flex items-center text-sm text-gray-500">
                  <span>{product.seller}</span>
                  <div className="flex items-center ml-auto">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                
                <div className="flex items-center mt-auto pt-3">
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold text-gray-900">{product.price.toFixed(2)}€</span>
                    {product.oldPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">{product.oldPrice.toFixed(2)}€</span>
                    )}
                  </div>
                  
                  <motion.button 
                    className="ml-auto p-2 rounded-full bg-[#E60023] text-white shadow-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="btn-primary inline-flex items-center">
            <span>Voir plus de produits</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingProducts;
