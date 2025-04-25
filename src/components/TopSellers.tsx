import React from 'react';
import { motion } from 'framer-motion';

const TopSellers: React.FC = () => {
  const sellers = [
    {
      id: 1,
      name: 'Ferme du Soleil',
      image: 'https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?q=80&w=1776&auto=format&fit=crop',
      location: 'Provence-Alpes-Côte d\'Azur',
      description: 'Spécialiste des fruits et légumes biologiques cultivés en permaculture.',
      rating: 4.9,
      products: 37,
      badge: 'Bio'
    },
    {
      id: 2,
      name: 'Fromagerie Duval',
      image: 'https://images.unsplash.com/photo-1528750997573-3c234b3bbe3f?q=80&w=1770&auto=format&fit=crop',
      location: 'Normandie',
      description: 'Fromages artisanaux AOP fabriqués selon les traditions normandes.',
      rating: 4.8,
      products: 24,
      badge: 'Artisanal'
    },
    {
      id: 3,
      name: 'Boulangerie Moreau',
      image: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=1780&auto=format&fit=crop',
      location: 'Ile-de-France',
      description: 'Pains et viennoiseries au levain naturel, farines locales.',
      rating: 4.7,
      products: 32,
      badge: 'Local'
    },
    {
      id: 4,
      name: 'Domaine Lavigne',
      image: 'https://images.unsplash.com/photo-1559519529-0936e4058364?q=80&w=1674&auto=format&fit=crop',
      location: 'Bourgogne',
      description: 'Vins biologiques en biodynamie, respect du terroir et des traditions.',
      rating: 4.9,
      products: 18,
      badge: 'Bio'
    }
  ];

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
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Nos vendeurs populaires</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Découvrez les artisans et producteurs les mieux notés de notre marketplace
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className="btn-outline flex items-center">
              <span>Voir tous les vendeurs</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {sellers.map((seller) => (
            <motion.div 
              key={seller.id}
              variants={item}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={seller.image} 
                  alt={seller.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#E60023] text-white text-sm font-medium px-3 py-1 rounded-full">
                  {seller.badge}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{seller.name}</h3>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-700 font-medium">{seller.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{seller.location}</span>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-2">{seller.description}</p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{seller.products} produits</span>
                  
                  <motion.button 
                    className="text-[#E60023] text-sm font-medium flex items-center"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Visiter</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopSellers;
