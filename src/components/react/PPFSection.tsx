import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const zones = [
  { name: 'Zona 1 — Front', area: 'Bumper, hood, fender depan', price: 'Rp 8 - 15 jt' },
  { name: 'Zona 2 — Full Front', area: '+ A-pillar, side mirror', price: 'Rp 12 - 20 jt' },
  { name: 'Zona 3 — Full Body', area: 'Seluruh panel eksterior', price: 'Rp 30 - 80 jt' },
  { name: 'Track Pack', area: 'Bumper, hood, sill, roof', price: 'Rp 15 - 25 jt' },
];

export default function PPFSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax Image
    gsap.to('.ppf-img', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      y: 100,
      ease: 'none'
    });

    // Content Reveal
    gsap.from('.ppf-content > *', {
      scrollTrigger: {
        trigger: '.ppf-content',
        start: 'top 80%',
      },
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Table Rows
    gsap.from('.ppf-row', {
      scrollTrigger: {
        trigger: '.ppf-table',
        start: 'top 85%',
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
    });
  }, { scope: container });

  return (
    <section id="ppf" ref={container} className="py-20 md:py-32 bg-surface border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="ppf-content">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Paint Protection Film</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase mb-6 text-white leading-tight">
            Armor Tertinggi Untuk Cat Anda
          </h3>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
            PPF adalah perisai pelindung yang bekerja keras di balik layar. Transparan, self-healing, dan tahan terhadap benturan fisik seperti kerikil yang tidak bisa ditahan oleh ceramic coating.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/80"><span className="text-gold">✓</span> Protect dari rock chip</li>
              <li className="flex items-start gap-2 text-sm text-white/80"><span className="text-gold">✓</span> Self-healing scratch</li>
              <li className="flex items-start gap-2 text-sm text-white/80"><span className="text-gold">✓</span> Transparan invisible</li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/80"><span className="text-gold">✓</span> Bisa ditimpa coating</li>
              <li className="flex items-start gap-2 text-sm text-white/80"><span className="text-gold">✓</span> 10 tahun warranty (XPEL)</li>
              <li className="flex items-start gap-2 text-red-500/80"><span>✗</span> Tanpa PPF = chip & rust</li>
            </ul>
          </div>

          <div className="ppf-table bg-black border border-white/10 p-6">
            <h4 className="font-display font-bold text-xl uppercase mb-4 text-white">Coverage & Pricing</h4>
            <div className="space-y-4">
              {zones.map((zone, i) => (
                <div key={i} className="ppf-row flex flex-col md:flex-row justify-between pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <div>
                    <div className="font-bold text-white text-sm uppercase tracking-wider">{zone.name}</div>
                    <div className="text-white/60 text-xs mt-1">{zone.area}</div>
                  </div>
                  <div className="text-gold font-light text-sm mt-2 md:mt-0">{zone.price}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 overflow-hidden border-y border-white/5 py-6">
            <div className="flex items-center gap-12 opacity-60 w-max animate-marquee">
               {/* First set */}
               <span className="font-display font-bold text-3xl uppercase tracking-widest px-8">XPEL</span>
               <span className="font-display font-bold text-2xl uppercase tracking-widest px-8">Suntek</span>
               <span className="font-display font-bold text-2xl uppercase tracking-widest px-8">Llumar</span>
               <span className="font-display font-bold text-3xl uppercase tracking-widest px-8 text-white/30">3M</span>
               <span className="font-display font-bold text-2xl uppercase tracking-widest px-8">Hexis</span>
               
               {/* Duplicated set for seamless infinite scroll */}
               <span className="font-display font-bold text-3xl uppercase tracking-widest px-8">XPEL</span>
               <span className="font-display font-bold text-2xl uppercase tracking-widest px-8">Suntek</span>
               <span className="font-display font-bold text-2xl uppercase tracking-widest px-8">Llumar</span>
               <span className="font-display font-bold text-3xl uppercase tracking-widest px-8 text-white/30">3M</span>
               <span className="font-display font-bold text-2xl uppercase tracking-widest px-8">Hexis</span>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] md:h-[600px] lg:h-[800px] bg-black overflow-hidden border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1000&auto=format&fit=crop" 
            alt="PPF Installation" 
            className="ppf-img absolute -top-[100px] left-0 w-full h-[calc(100%+200px)] object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          
          {/* Hexagon Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 border border-gold opacity-20 pointer-events-none" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        </div>

      </div>
    </section>
  );
}