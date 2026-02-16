import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { MENU_STRUCTURE } from '../data/menu';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        
        {/* Top: Logo & Main Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & About (3 cols) */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">JEJU SEMICONDUCTOR</h2>
              <div className="w-12 h-1 bg-primary-500 rounded-full"></div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 pr-6">
              Leading the future of ultra-low power memory solutions. We connect the world through advanced semiconductor technology.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Facebook, href: "https://facebook.com" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links (9 cols grid) */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {MENU_STRUCTURE.map((menu) => (
                <div key={menu.id}>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-slate-800">
                    <Link to={menu.path} className="hover:text-primary-400 transition-colors">
                      {menu.label}
                    </Link>
                  </h3>
                  <ul className="space-y-3">
                    {menu.children.map((sub, idx) => (
                      <li key={idx}>
                        <Link 
                          to={sub.path} 
                          className="text-slate-500 text-sm hover:text-primary-400 transition-colors block"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle: Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-t border-slate-800">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-slate-800 rounded-lg text-primary-500 shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Jeju Headquarters</h4>
              <p className="text-slate-400 text-sm">Jeju Science Park, Jeju-do, Korea</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-slate-800 rounded-lg text-primary-500 shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Phone</h4>
              <p className="text-slate-400 text-sm">+82-64-740-1700</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-slate-800 rounded-lg text-primary-500 shrink-0">
              <Mail size={24} />
            </div>
            <div>
               <h4 className="font-bold text-white mb-1">Email</h4>
               <p className="text-slate-400 text-sm">sales@jeju-semi.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {currentYear} Jeju Semiconductor Corp. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
