import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const filters = ['All', 'Coating', 'PPF', 'Wrapping', 'Correction'];

const portfolio = [
  { id: 1, category: 'PPF', title: 'Ferrari 488 GTB', desc: 'Full PPF XPEL + Gyeon Coating', duration: '5 Hari', img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600&auto=format&fit=crop', tall: true },
  { id: 2, category: 'Coating', title: 'BMW M3', desc: 'Gtechniq Crystal Serum Light 5 Tahun', duration: '3 Hari', img: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=600&auto=format&fit=crop', tall: false },
  { id: 3, category: 'Wrapping', title: 'Porsche 911', desc: 'Color Change Wrap (Satin Black)', duration: '4 Hari', img: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600&auto=format&fit=crop', tall: false },
  { id: 4, category: 'PPF', title: 'Mercedes AMG C63', desc: 'Full Body PPF + Chrome Delete', duration: '5 Hari', img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600&auto=format&fit=crop', tall: true },
  { id: 5, category: 'Correction', title: 'Toyota GR86', desc: 'Stage 2 Correction + MOHS EVO', duration: '3 Hari', img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600&auto=format&fit=crop', tall: false },
  { id: 6, category: 'Coating', title: 'Audi RS6', desc: 'Ceramic Pro Gold', duration: '4 Hari', img: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=600&auto=format&fit=crop', tall: true },
];

export default function PortfolioMasonry() {
  const container = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = portfolio.filter(item => activeFilter === 'All' || item.category === activeFilter);

  useGSAP(() => {
    gsap.from('.port-header > *', {
      scrollTrigger: {
        trigger: '.port-header',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, { scope: container });

  // Animate items on filter change
  useGSAP(() => {
    gsap.from('.port-item', {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
      clearProps: 'all'
    });
  }, { scope: container, dependencies: [activeFilter] });

  return (
    <section id="portfolio" ref={container} className="py-20 md:py-32 bg-surface border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="port-header text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Masterpiece</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase mb-6 text-white leading-tight">
            Portfolio Kami
          </h3>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            Semua dikerjakan di workshop kami. Semua foto asli, bukan stock. Bukti nyata dari komitmen terhadap kesempurnaan.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-300 rounded-none border ${
                activeFilter === filter 
                  ? 'bg-gold text-black border-gold' 
                  : 'bg-transparent text-white/50 border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Grid (CSS based approach for simplicity, though real masonry might need JS calculation) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map(item => (
            <div key={item.id} className="port-item break-inside-avoid relative group cursor-pointer overflow-hidden border border-white/10 rounded-none bg-black">
              <div className={`relative w-full ${item.tall ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute inset-x-0 bottom-0 p-6 transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black to-transparent">
                <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">{item.category}</span>
                <h4 className="font-display font-bold text-xl uppercase text-white mb-1">{item.title}</h4>
                <p className="text-white/60 text-sm mb-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.desc}</p>
                <div className="flex items-center gap-2 text-xs text-white/60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="6" r="5"/><path d="M6 3v3l2 2"/></svg>
                  {item.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-white/40 italic">
            Belum ada portfolio di kategori ini.
          </div>
        )}
      </div>
    </section>
  );
}