import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Loader2, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import SubPageLayout from '../components/layout/SubPageLayout';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        
        // Simulate API call for now (or use Firebase if configured)
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', company: '', subject: '', message: '' });
        }, 1500);

        /* 
        try {
            await addDoc(collection(db, "inquiries"), {
                ...formData,
                createdAt: serverTimestamp(),
                status: 'new'
            });
            setStatus('success');
            setFormData({ name: '', email: '', company: '', subject: '', message: '' });
        } catch (error) {
            console.error("Error submitting form: ", error);
            setStatus('error');
        }
        */
    };

    return (
        <SubPageLayout
          title="문의하기"
          subtitle="제품 사양, 견적, 파트너십 등 궁금한 점이 있으시다면 언제든 문의해 주세요. 신속하고 정확하게 답변해 드리겠습니다."
          category="SUPPORT"
          bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        >
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                
                {/* Contact Info Side */}
                <div className="order-2 lg:order-1">
                    <div className="bg-[#003366] rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-between">
                        {/* Background Gradients */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AEEF] rounded-full filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-10 border-b border-white/10 pb-6">연락처 안내</h2>
                            
                            <div className="space-y-10">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-300 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-white">제주 본사 (Headquarters)</h3>
                                        <p className="text-slate-300 leading-relaxed font-light">
                                            제주특별자치도 제주시 첨단로 8길<br/>
                                            (우) 63309
                                        </p>
                                    </div>
                                </div>
    
                                <div className="flex items-start gap-6 group">
                                   <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-300 shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-white">전화 및 팩스</h3>
                                        <p className="text-slate-300 font-light">Tel: 064-123-4567</p>
                                        <p className="text-slate-300 font-light">Fax: 064-123-4568</p>
                                        <p className="text-slate-400 text-sm mt-1">평일 09:00 - 18:00 (주말 및 공휴일 휴무)</p>
                                    </div>
                                </div>
    
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all duration-300 shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-white">이메일</h3>
                                        <p className="text-slate-300 font-light">sales@jeju-semi.com</p>
                                        <p className="text-slate-400 text-sm mt-1">제품 견적 및 영업 관련 문의</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        {/* Map or Global Network Link */}
                        <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                             <a href="/contact/location" className="group inline-flex items-center text-[#00AEEF] hover:text-white font-semibold transition-colors">
                                글로벌 네트워크 보기 <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
    
                {/* Form Side */}
                <div className="order-1 lg:order-2">
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                        {status === 'success' ? (
                            <motion.div 
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="bg-green-50 p-8 rounded-2xl border border-green-100 text-center flex flex-col items-center justify-center h-full min-h-[400px]"
                            >
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-3">전송이 완료되었습니다!</h3>
                                <p className="text-slate-600 mb-8 max-w-xs mx-auto break-keep">문의해주셔서 감사합니다. 담당자가 내용을 확인한 후 빠른 시일 내에 기재해주신 이메일로 답변 드리겠습니다.</p>
                                <button 
                                    onClick={() => setStatus('idle')}
                                    className="px-8 py-3 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors shadow-xs"
                                >
                                    추가 문의하기
                                </button>
                            </motion.div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">메시지 보내기</h3>
                                <p className="text-slate-500 mb-8 break-keep">아래 양식을 작성해주시면 24시간 이내에 답변을 드리도록 하겠습니다.</p>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">이름</label>
                                            <input 
                                                type="text" 
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[#00AEEF] focus:ring-2 focus:ring-blue-50 outline-hidden transition-all placeholder:text-slate-400"
                                                placeholder="성함을 입력해주세요"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">회사명</label>
                                            <input 
                                                type="text" 
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[#00AEEF] focus:ring-2 focus:ring-blue-50 outline-hidden transition-all placeholder:text-slate-400"
                                                placeholder="(주)제주반도체"
                                            />
                                        </div>
                                    </div>
        
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">이메일</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[#00AEEF] focus:ring-2 focus:ring-blue-50 outline-hidden transition-all placeholder:text-slate-400"
                                            placeholder="example@company.com"
                                        />
                                    </div>
        
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">문의 유형</label>
                                        <div className="relative">
                                            <select 
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[#00AEEF] focus:ring-2 focus:ring-blue-50 outline-hidden transition-all appearance-none cursor-pointer text-slate-700"
                                            >
                                                <option value="">문의하실 내용을 선택해주세요</option>
                                                <option value="sales">제품 구매 및 견적 문의</option>
                                                <option value="support">기술 지원 (Technical Support)</option>
                                                <option value="partnership">파트너십 제안</option>
                                                <option value="media">보도자료 및 미디어 문의</option>
                                                <option value="other">기타</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                <ChevronRight className="rotate-90 w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
        
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">메시지</label>
                                        <textarea 
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[#00AEEF] focus:ring-2 focus:ring-blue-50 outline-hidden transition-all resize-none placeholder:text-slate-400"
                                            placeholder="문의 내용을 상세히 작성해주시면 더욱 정확한 답변이 가능합니다."
                                        ></textarea>
                                    </div>
        
                                    <button 
                                        type="submit" 
                                        disabled={status === 'submitting'}
                                        className="w-full py-4 bg-[#00AEEF] hover:bg-[#009bd5] text-white font-bold rounded-xl shadow-lg shadow-blue-400/20 flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98] duration-200"
                                    >
                                        {status === 'submitting' ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                                        메시지 전송
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
    
            </div>
          </div>
        </SubPageLayout>
    );
};

export default Contact;
