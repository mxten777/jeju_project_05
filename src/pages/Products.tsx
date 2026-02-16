import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Zap, 
  Database,
  Smartphone,
  Car
} from 'lucide-react';
import SubPageLayout from '../components/layout/SubPageLayout';
import { products } from '../data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories from products
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Icon helper for categories (optional visual polish)
  const getCategoryIcon = (cat: string) => {
    switch(cat) {
      case 'Mobile Memory': return <Smartphone size={18} className="mr-2" />;
      case 'Automotive': return <Car size={18} className="mr-2" />;
      case 'Storage': return <Database size={18} className="mr-2" />;
      case 'IoT / Mobile': return <Cpu size={18} className="mr-2" />;
      default: return null;
    }
  };

  return (
    <SubPageLayout 
      title="Product Portfolio" 
      subtitle="Discover our comprehensive range of high-performance semiconductor solutions."
      category="PRODUCTS"
    >
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 sticky top-[72px] z-30 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-sm">
        
        {/* Category Filters */}
        <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-2 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center
                ${selectedCategory === cat 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-200 border border-slate-200'}`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-[320px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-full leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 sm:text-sm transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="min-h-[400px]">
        {filteredProducts.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/products/${product.id}`} className="block h-full cursor-pointer group">
                    <article className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300 h-full flex flex-col relative group">
                      
                      {/* Hover Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-50/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                      {/* Top Label */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-[10px] font-bold text-white bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-md uppercase tracking-wide border border-white/10">
                          {product.category}
                        </span>
                      </div>

                      {/* Image Area */}
                      <div className="aspect-[4/3] bg-linear-to-br from-slate-100 to-white flex items-center justify-center p-8 relative overflow-hidden">
                        {/* Background Deco */}
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-slate-200/50 rounded-full blur-2xl group-hover:bg-primary-200/50 transition-colors duration-500" />
                        
                        {/* Icon */}
                        <div className="relative z-10 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 group-hover:shadow-md">
                           <Cpu size={48} className="text-slate-400 group-hover:text-primary-600 transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 flex flex-col flex-grow bg-white relative z-20">
                        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        
                        <p className="text-sm text-slate-500 line-clamp-2 mb-6 flex-grow leading-relaxed">
                          {product.description}
                        </p>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-2 text-xs mb-6">
                            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 group-hover:border-primary-100 transition-colors">
                              <span className="block text-slate-400 font-semibold mb-0.5 uppercase tracking-wider text-[10px]">Density</span>
                              <span className="font-semibold text-slate-700">{product.specs.find(s => s.label === 'Density')?.value || '-'}</span>
                            </div>
                            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 group-hover:border-primary-100 transition-colors">
                              <span className="block text-slate-400 font-semibold mb-0.5 uppercase tracking-wider text-[10px]">Speed</span>
                              <span className="font-semibold text-slate-700">{product.specs.find(s => s.label === 'Speed')?.value || '-'}</span>
                            </div>
                        </div>

                        {/* Link Button */}
                        <div className="flex items-center justify-between mt-auto border-t border-slate-100 pt-4 group-hover:border-primary-100 transition-colors">
                          <span className="text-sm font-semibold text-slate-400 group-hover:text-primary-600 transition-colors">View Details</span>
                          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary-600 group-hover:text-white transition-all transform group-hover:translate-x-1">
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-32 text-slate-400 bg-slate-50 rounded-2xl border border-slate-200 border-dashed"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100">
              <Filter size={32} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">No products found</h3>
            <p className="max-w-md text-center mb-8">We couldn't find any products matching your current filters. Try adjusting your search or category selection.</p>
            <button 
              onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
              className="px-6 py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 hover:shadow-lg transition-all"
            >
              Reset All Filters
            </button>
          </motion.div>
        )}
      </div>
    </SubPageLayout>
  );
};

export default Products;
