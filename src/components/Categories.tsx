import React from 'react';
import { motion } from 'framer-motion';

const Categories: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: 'Fruits & Légumes',
      image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1770&auto=format&fit=crop',
      color: 'from-green-500/20 to-green-500/5',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15.9h.008a8.25 8.25 0 00-1.474-5.385l-.485-.675a1.942 1.942 0 00-2.456-.588l-.527.306a1.942 1.942 0 00-.21 3.16l.242.205c.414.35.508.954.286 1.41l-.043.087a1.945 1.945 0 01-2.227.819l-.308-.097A1.85 1.85 0 018.25 14.5a1.94 1.94 0 01-1.631-2.89l.104-.178a1.94 1.94 0 00-.156-2.205l-.645-.645a1.942 1.942 0 00-2.2-.33l-.509.27a1.938 1.938 0 00-.474 3.069l.237.237c.266.266.37.655.278 1.023l-.266 1.064a1.953 1.953 0 00.51 1.93l1.013.913c.434.39.508 1.04.208 1.53l-.368.602z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 2,
      name: 'Produits Laitiers',
      image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=1770&auto=format&fit=crop',
      color: 'from-blue-500/20 to-blue-500/5',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm-4.34 7.964a.75.75 0 01-1.061-1.06 5.236 5.236 0 013.73-1.538 5.236 5.236 0 013.695 1.538.75.75 0 11-1.061 1.06 3.736 3.736 0 00-2.639-1.098 3.736 3.736 0 00-2.664 1.098z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 3,
      name: 'Boulangerie',
      image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1932&auto=format&fit=crop',
      color: 'from-yellow-500/20 to-yellow-500/5',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.035s1.002.015 1.5.035c.549.021 1.083.057 1.607.105.141-.666.253-1.322.33-1.96A41.493 41.493 0 0012 5.5a41.497 41.497 0 00-2.687.157c.078.638.19 1.294.33 1.96.524-.048 1.059-.084 1.607-.105zM3 18.245v-2.99a6.75 6.75 0 00.034-.562c.056-.938.195-1.938.418-2.969a1.536 1.536 0 00-.401-1.504l-1.41-1.37a.75.75 0 01-.173-.808l.383-1.027a.75.75 0 01.624-.513l1.257-.144c.578-.065.94-.497.94-.924 0-.333-.129-.673-.384-.91l-.924-.804a.75.75 0 01-.172-.912l.5-1.003a.75.75 0 01.651-.41h2.108a.75.75 0 01.742.83l-.096 1.105c-.056.658.439 1.242 1.15 1.372a41.316 41.316 0 015.975.41c.56.073 1.062-.246 1.21-.79l.443-1.604a.75.75 0 01.725-.544h2.608a.75.75 0 01.661.41l.5 1.003a.75.75 0 01-.172.912l-.924.804a1.125 1.125 0 00-.192 1.613l.637.622a.75.75 0 01.173.808l-.393 1.052a.75.75 0 01-.624.513l-1.257.144c-.578.065-.94.496-.94.924 0 .333.129.673.384.91l.924.803a.75.75 0 01.172.913l-.5 1.003a.75.75 0 01-.652.41h-2.108a.75.75 0 01-.741-.83l.096-1.105c.056-.658-.439-1.242-1.15-1.372a41.316 41.316 0 01-5.975-.41c-.56-.073-1.062.246-1.21.79l-.444 1.604a.75.75 0 01-.724.544H6.164a.75.75 0 01-.661-.41l-.5-1.003a.75.75 0 01.172-.913l.924-.803c.384-.334.602-.903.473-1.458a41.646 41.646 0 01-.6-4.534c-.032-.49-.362-.92-.863-.92H4.046a.75.75 0 01-.749-.8l.032-.454c.025-.362.23-.667.54-.84.43-.24.919-.503 1.461-.779a11.8 11.8 0 00-.106-1.213 1.875 1.875 0 00-.804-1.312l-.97-.608a.75.75 0 01-.293-.987L4.23 5.237a.75.75 0 01.881-.357l1.813.603a2.25 2.25 0 001.84-.101l.639-.356c.47-.262.868-.578 1.224-.872.508-.42 1.319-.448 1.760.027.394.427.561.945.561 1.48a4.516 4.516 0 01-.294 1.586 1.237 1.237 0 01-.538.623 3.535 3.535 0 01-1.25.341c-.243.023-.484.074-.724.133a41.698 41.698 0 015.397-.578A.75.75 0 0116 9h2.25a.75.75 0 01.75.75v3c0 3.1-2.498 5.75-5.75 5.75h-.04c.33-.147.639-.326.921-.539.261-.197.508-.416.736-.655l.246.222a12.11 12.11 0 01-5.347 2.635A49.02 49.02 0 018.775 21H2.75a.75.75 0 01-.75-.75v-2.005z" />
        </svg>
      )
    },
    {
      id: 4,
      name: 'Viandes',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1770&auto=format&fit=crop',
      color: 'from-red-500/20 to-red-500/5',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 5,
      name: 'Boissons',
      image: 'https://images.unsplash.com/photo-1581006852348-8b4aec03adb6?q=80&w=1770&auto=format&fit=crop',
      color: 'from-purple-500/20 to-purple-500/5',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 6,
      name: 'Produits Locaux',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1770&auto=format&fit=crop',
      color: 'from-pink-500/20 to-pink-500/5',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      )
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Explorez nos catégories
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Découvrez l'incroyable variété de produits frais proposés par nos vendeurs locaux dans toute la France.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id} 
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg h-[280px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                  {category.icon}
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{category.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-200 text-sm">Découvrir</p>
                    <motion.div 
                      className="bg-white rounded-full p-2 cursor-pointer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <div className={`absolute -bottom-4 left-[10%] right-[10%] h-8 bg-gradient-to-r ${category.color} rounded-full blur-xl z-0 opacity-70`}></div>
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
          <button className="btn-outline inline-flex items-center">
            <span>Toutes les catégories</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
