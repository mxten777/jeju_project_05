import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle,
  Cpu, 
  Zap, 
  Gauge, 
  Smartphone, 
  Tablet, 
  Watch, 
  Tv, 
  Speaker, 
  Map, 
  Wifi,
  CreditCard,
  Home,
  Music,
  Camera,
  Layers,
  Thermometer,
  ArrowRight
} from 'lucide-react';
import SubPageLayout from '../components/layout/SubPageLayout';
import { products } from '../data/products';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  Smartphone, Tablet, Watch, Tv, Speaker, Map, Wifi, CreditCard, Home, Music, Gauge, Camera, Thermometer, Cpu, Zap, Layers
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  // Handle case where id might be undefined, though routing should prevent it
  if (!id) return null;

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-100 max-w-md mx-auto">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
            <Cpu size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Product Not Found</h2>
          <p className="text-slate-500 mb-6">The product you are looking for does not exist or has been removed.</p>
          <Link 
            to="/products" 
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Return to Products <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  // Find related products
  const relatedProducts = products.filter(p => product.related?.includes(p.id));

  // Determine icon based on category for hero section
  const HeroIcon = iconMap[product.category] || Cpu;

  return (
    <SubPageLayout 
      title={product.name}
      subtitle={product.description}
      category={product.category}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        {/* Left: Product Viz */}
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl aspect-square flex flex-col items-center justify-center p-8 relative overflow-hidden group shadow-lg border border-slate-100"
          >
            <div className="absolute inset-0 bg-linear-to-br from-slate-50 to-white opacity-50" />
            <div className="relative z-10 w-48 h-48 bg-slate-900 rounded-xl flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <div className="text-center">
                <HeroIcon size={64} className="text-primary-400 mx-auto mb-2" />
                <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Jeju Semi</span>
                <div className="text-white font-bold text-lg mt-1">{product.name}</div>
              </div>
              {/* Chip metallic effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/10 to-transparent pointer-events-none" />
            </div>
            
            <div className="mt-8 w-full">
              <div className="flex justify-between text-sm text-slate-500 border-t border-slate-100 pt-4">
                <span>Form Factor</span>
                <span className="font-semibold text-slate-800">
                  {product.specs.find(s => s.label === 'Package')?.value || 'N/A'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Key Specs & Highlights */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle className="text-primary-600" size={24} /> Key Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:bg-white hover:shadow-sm transition-all"
                >
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-4 border-l-2 border-slate-200 ml-1">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8">
             <h3 className="text-lg font-bold text-slate-900 mb-4 bg-slate-100 inline-block px-3 py-1 rounded text-slate-600">
               Quick Specs
             </h3>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {product.specs.slice(0, 3).map((spec, idx) => (
                   <div key={idx} className="bg-white border border-slate-200 p-4 rounded-lg hover:border-primary-300 transition-colors">
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">
                        {spec.label}
                      </span>
                      <span className="font-bold text-slate-800 text-lg">
                        {spec.value}
                      </span>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications Table */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 border-b border-slate-200 pb-4">
          <Layers className="text-primary-600" /> Technical Specifications
        </h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
          <table className="w-full text-left border-collapse">
            <tbody className="divide-y divide-slate-100">
              {product.specs.map((spec, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                  <th className="p-5 bg-slate-50/50 w-1/3 sm:w-1/4 font-semibold text-slate-600 group-hover:text-primary-700 transition-colors">
                    {spec.label}
                  </th>
                  <td className="p-5 text-slate-800 font-medium">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 border-b border-slate-200 pb-4">
           <Zap className="text-yellow-500" /> Applications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {product.applications.map((app, idx) => {
            const Icon = (typeof app.icon === 'string' ? iconMap[app.icon] : Cpu) || Cpu;
            return (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center aspect-square hover:border-primary-400 hover:shadow-md transition-all group cursor-default"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="font-bold text-slate-800 group-hover:text-primary-700 transition-colors">
                  {typeof app === 'string' ? app : app.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 border-b border-slate-200 pb-4">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((related) => (
              <Link to={`/products/${related.id}`} key={related.id} className="group block h-full">
                <article className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary-400 hover:shadow-lg transition-all h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded uppercase tracking-wider">
                      {related.category}
                    </span>
                    <ArrowRight size={20} className="text-slate-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {related.name}
                  </h3>
                  
                  <p className="text-sm text-slate-500 line-clamp-2 mb-6 flex-grow">
                    {related.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center text-xs font-medium text-slate-500">
                      <Layers size={14} className="mr-2 text-slate-400" />
                      {related.specs.find(s => s.label === 'Density' || s.label === 'Configuration')?.value}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </SubPageLayout>
  );
};

export default ProductDetail;
