import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, ArrowRight, ChevronRight } from 'lucide-react';
import SubPageLayout from '../components/layout/SubPageLayout';

// Mock Data for News Items (Korean)
const NEWS_DATA = [
  {
    id: 1,
    category: 'PRESS',
    date: '2024-03-15',
    title: '제주반도체, 차량용 초저전력 LPDDR5X 개발 성공',
    excerpt: '자율주행 시스템을 위한 고성능, 저전력 차세대 메모리 솔루션으로 글로벌 오토모티브 시장 공략 가속화.',
    image: 'https://images.unsplash.com/photo-1549402564-9d581c7e9371?q=80&w=2670&auto=format&fit=crop',
    featured: true
  },
  {
    id: 2,
    category: 'IR',
    date: '2024-02-28',
    title: '2023년 4분기 경영실적 발표: 역대 최대 매출 달성',
    excerpt: 'IoT 및 차량용 반도체 수요 증가에 힘입어 전년 동기 대비 25% 성장, 영업이익률 15% 기록.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2670&auto=format&fit=crop',
    featured: false
  },
  {
    id: 3,
    category: 'TECH',
    date: '2024-01-10',
    title: '5G IoT 디바이스를 위한 차세대 RF 솔루션 공개',
    excerpt: '전력 소모를 30% 절감하면서도 통신 안정성을 획기적으로 개선한 신규 RF 칩셋 라인업.',
    image: 'https://images.unsplash.com/photo-1531297461136-82lwDe83a916?q=80&w=2670&auto=format&fit=crop',
    featured: false
  },
  {
    id: 4,
    category: 'PRESS',
    date: '2023-12-05',
    title: '글로벌 Tier-1 자동차 부품사와 전략적 파트너십 체결',
    excerpt: '차세대 인포테인먼트 시스템용 맞춤형 메모리 공동 개발을 위한 MOU 체결.',
    image: 'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?q=80&w=2670&auto=format&fit=crop',
    featured: false
  },
  {
    id: 5,
    category: 'ESG',
    date: '2023-11-20',
    title: '2025 탄소중립(Net-Zero) 달성 로드맵 발표',
    excerpt: '지속 가능한 제조 공정과 재생 에너지 사용 확대를 통해 친환경 반도체 기업으로 도약.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop',
    featured: false
  },
  {
    id: 6,
    category: 'IR',
    date: '2023-10-15',
    title: '제24기 정기 주주총회 소집 공고',
    excerpt: '당사 정관 제19조에 의거하여 제24기 정기 주주총회를 아래와 같이 개최하오니 참석하여 주시기 바랍니다.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop',
    featured: false
  }
];

const CATEGORIES = [
  { id: 'ALL', label: '전체' },
  { id: 'PRESS', label: '보도자료' },
  { id: 'IR', label: 'IR 공지' },
  { id: 'TECH', label: '기술 블로그' },
  { id: 'ESG', label: 'ESG 경영' }
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = NEWS_DATA.filter(item => {
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = NEWS_DATA.find(item => item.featured);

  return (
    <SubPageLayout 
      title="News & Media" 
      subtitle="제주반도체의 최신 소식과 기술 혁신, 기업 뉴스를 전해드립니다."
      category="MEDIA CENTER"
      bgImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Featured Article Section */}
        {activeCategory === 'ALL' && featuredNews && !searchQuery && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 relative rounded-3xl overflow-hidden group cursor-pointer h-[500px]"
          >
            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors duration-500 z-10" />
            <img 
              src={featuredNews.image} 
              alt={featuredNews.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 bg-linear-to-t from-slate-900/90 via-slate-900/50 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#00AEEF] text-white text-xs font-bold rounded-full tracking-wider">
                  {featuredNews.category}
                </span>
                <span className="text-slate-300 text-sm flex items-center gap-2">
                  <Calendar size={14} />
                  {featuredNews.date}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-[#00AEEF] transition-colors">
                {featuredNews.title}
              </h2>
              <p className="text-slate-200 text-lg max-w-2xl mb-6 line-clamp-2 break-keep">
                {featuredNews.excerpt}
              </p>
              <div className="flex items-center text-white font-semibold gap-2 group-hover:gap-4 transition-all">
                자세히 보기 <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? 'bg-[#003366] text-white border-[#003366] shadow-lg shadow-blue-900/20'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-[#00AEEF] hover:text-[#003366]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80 group">
            <input 
              type="text" 
              placeholder="뉴스 검색..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 rounded-full border border-slate-200 focus:border-[#00AEEF] focus:ring-2 focus:ring-blue-100 outline-hidden transition-all text-sm text-slate-700 placeholder-slate-400 group-hover:border-slate-300"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-[#00AEEF] transition-colors" />
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((item) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#003366] text-xs font-bold rounded-full shadow-xs border border-white/50">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-slate-400 text-xs font-semibold mb-3 gap-2">
                    <Calendar size={14} className="text-[#00AEEF]" />
                    {item.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#003366] transition-colors line-clamp-2 break-keep">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow break-keep">
                    {item.excerpt}
                  </p>
                  
                  <div className="pt-4 border-t border-slate-100 flex justify-between items-center group-hover:border-[#003366]/20 transition-colors">
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-[#00AEEF] transition-colors flex items-center gap-1">
                      더 보기 <ChevronRight size={14} />
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#003366] group-hover:text-white transition-all duration-300">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Search size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-700 mb-2">검색 결과가 없습니다</h3>
            <p className="text-slate-500">다른 검색어나 카테고리를 선택해보세요.</p>
          </div>
        )}

        {/* Pagination (Mock) */}
        {filteredNews.length > 0 && (
          <div className="flex justify-center mt-16 gap-2">
            <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#00AEEF] hover:text-[#00AEEF] transition-colors disabled:opacity-50">
              &lt;
            </button>
            <button className="w-10 h-10 rounded-full bg-[#003366] text-white font-bold flex items-center justify-center shadow-lg shadow-blue-900/20">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 font-medium flex items-center justify-center hover:border-[#00AEEF] hover:text-[#00AEEF] transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 font-medium flex items-center justify-center hover:border-[#00AEEF] hover:text-[#00AEEF] transition-colors">
              3
            </button>
            <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#00AEEF] hover:text-[#00AEEF] transition-colors">
              &gt;
            </button>
          </div>
        )}

      </div>
    </SubPageLayout>
  );
};

export default News;
