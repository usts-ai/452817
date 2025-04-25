import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      role: 'Cliente régulière',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: 'FoodMarket a transformé ma façon de faire mes courses. Grâce à cette marketplace, je peux acheter directement auprès de producteurs locaux. Les produits sont d\'une qualité exceptionnelle et la livraison est toujours ponctuelle.',
      rating: 5
    },
    {
      id: 2,
      name: 'Thomas Bernard',
      role: 'Chef restaurateur',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'En tant que chef, la qualité des ingrédients est primordiale. FoodMarket m\'a permis de découvrir des producteurs exceptionnels et d\'établir des relations durables avec eux. C\'est devenu un outil indispensable pour mon restaurant.',
      rating: 5
    },
    {
      id: 3,
      name: 'Sophie Martin',
      role: 'Mère de famille',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      content: 'Je recommande FoodMarket à toutes les familles soucieuses de la qualité de leur alimentation. Le choix est vaste, les prix sont justes, et c\'est tellement pratique de recevoir tout à domicile !',
      rating: 4
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#E60023]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6F00]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <motion.div 
          className="text-center mb-12 relative"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que nos clients disent
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits qui font confiance à FoodMarket pour leurs achats alimentaires
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <motion.div 
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative z-10"
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="mb-6 md:mb-0 md:mr-8 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-4 border-white shadow-md">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-center text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-500 text-center">{testimonials[activeIndex].role}</p>
                  
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1">
                  <svg className="w-10 h-10 text-[#E60023]/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                    {testimonials[activeIndex].content}
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-8">
              <motion.button 
                onClick={handlePrev}
                className="p-3 rounded-full bg-white shadow-md text-gray-700 hover:text-[#E60023] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? 'bg-[#E60023] w-8' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button 
                onClick={handleNext}
                className="p-3 rounded-full bg-white shadow-md text-gray-700 hover:text-[#E60023] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
