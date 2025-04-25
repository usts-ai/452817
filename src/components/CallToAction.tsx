import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1770&auto=format&fit=crop')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000/90] to-[#000000/70]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Rejoignez notre communauté pour une alimentation plus saine et locale
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Que vous soyez un producteur passionné ou un consommateur exigeant, FoodMarket vous connecte dans un écosystème transparent et de confiance.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button 
                className="btn-primary text-lg px-8 py-3 bg-[#E60023] rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Créer un compte
              </motion.button>
              
              <motion.button 
                className="text-white border-2 border-white text-lg px-8 py-3 rounded-full hover:bg-white hover:text-[#E60023] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                En savoir plus
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <h3 className="text-white text-2xl font-semibold mb-1">Rejoignez-nous</h3>
                <p className="text-gray-300 mb-6">Recevez nos offres et actualités</p>
              </div>
              
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-white text-sm font-medium mb-2">Prénom</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E60023] focus:border-transparent"
                  placeholder="Votre prénom"
                />
              </div>
              
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-white text-sm font-medium mb-2">Nom</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E60023] focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>
              
              <div className="col-span-2">
                <label className="block text-white text-sm font-medium mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E60023] focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div className="col-span-2">
                <label className="block text-white text-sm font-medium mb-2">Je suis...</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="inline-flex items-center p-3 bg-white/10 border border-white/30 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
                    <input type="radio" name="user_type" className="hidden" />
                    <span className="w-4 h-4 mr-2 rounded-full border-2 border-white/70 flex-shrink-0"></span>
                    <span className="text-white">Un consommateur</span>
                  </label>
                  
                  <label className="inline-flex items-center p-3 bg-white/10 border border-white/30 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
                    <input type="radio" name="user_type" className="hidden" />
                    <span className="w-4 h-4 mr-2 rounded-full border-2 border-white/70 flex-shrink-0"></span>
                    <span className="text-white">Un vendeur/producteur</span>
                  </label>
                </div>
              </div>
              
              <div className="col-span-2">
                <motion.button 
                  className="w-full btn-primary text-lg py-3 mt-4 bg-[#E60023] text-white rounded-lg border-none"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  S'inscrire à la newsletter
                </motion.button>
              </div>
              
              <div className="col-span-2 text-center">
                <p className="text-gray-400 text-sm">
                  En vous inscrivant, vous acceptez notre politique de confidentialité et nos conditions d'utilisation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
