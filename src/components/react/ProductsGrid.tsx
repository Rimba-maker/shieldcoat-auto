import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const brands = [
  { name: 'Gyeon Quartz', origin: 'Korea', lines: ['MOHS EVO', 'ONE'], status: 'Authorized Detailer' },
  { name: 'Gtechniq', origin: 'UK', lines: ['Crystal Serum Ultra', 'CSL'], status: 'Certified Detailer' },
  { name: 'Ceramic Pro', origin: 'US', lines: ['Gold Package', 'Sport'], status: 'Authorized Installer' },
  { name: 'XPEL', origin: 'US', lines: ['Ultimate Plus PPF', 'FUSION PLUS'], status: 'Authorized Installer' },
  { name: '3M', origin: 'US', lines: ['1080 Series', 'Crystalline'], status: 'Premium Material' },
  { name: 'Rupes', origin: 'Italy', lines: ['LHR Bigfoot', 'Gold Compounds'], status: 'Pro Equipment' },
];

export default function ProductsGrid() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.prod-header > *', {
      scrollTrigger: {
        trigger: '.prod-header',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

    gsap.from('.brand-card', {
      scrollTrigger: {
        trigger: '.brands-grid',
        start: 'top 75%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(1.7)',
    });
  }, { scope: container });

  return (
    <section id="products" ref={container} className="py-20 md:py-32 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="prod-header text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Partner Brand</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase mb-6 text-white leading-tight">
            Produk Bergaransi Internasional
          </h3>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            Kami tidak menggunakan produk lokal tanpa track record. Setiap material dipilih berdasarkan hasil uji ketahanan global, bukan sekadar marketing hype.
          </p>
        </div>

        <div className="brands-grid grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card group relative bg-surface border border-white/10 md:aspect-square flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:border-gold transition-colors duration-500 rounded-none overflow-hidden h-64 md:h-auto">
              
              {/* Default View (Name) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 md:group-hover:-translate-y-full translate-y-[-100%] md:translate-y-0 opacity-0 md:opacity-100">
                <span className="font-display font-bold text-2xl md:text-3xl uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">{brand.name}</span>
              </div>

              {/* Hover View (Details) - Always visible on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-6 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs text-white/60 uppercase tracking-widest mb-2 border-b border-white/10 pb-1">{brand.origin}</span>
                <h4 className="font-display font-bold text-xl uppercase mb-3 text-gold hidden md:block">{brand.name}</h4>
                <h4 className="font-display font-bold text-xl uppercase mb-3 text-gold md:hidden">{brand.name}</h4>
                <div className="space-y-1 mb-4">
                  {brand.lines.map((line, i) => (
                    <div key={i} className="text-sm text-white/80">{line}</div>
                  ))}
                </div>
                <div className="text-xs font-bold bg-white/10 px-3 py-1 uppercase tracking-wider">{brand.status}</div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}