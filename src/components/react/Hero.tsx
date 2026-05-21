import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Reveal Headline characters
    tl.from('.hero-title-char', {
      y: 100,
      opacity: 0,
      filter: 'blur(8px)',
      duration: 1,
      stagger: 0.05,
      ease: 'power3.out',
    });

    // Reveal Subheadline
    tl.from('.hero-sub', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.5');

    // Reveal Buttons
    tl.from('.hero-btn', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    }, '-=0.5');

    // Reveal Badges
    tl.from('.hero-badge', {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
    }, '-=0.5');

    // Shine sweep loop
    gsap.to('.hero-shine', {
      x: '200%',
      duration: 3,
      repeat: -1,
      repeatDelay: 5,
      ease: 'power1.inOut'
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1920&auto=format&fit=crop" 
          alt="Ceramic coating reflection dramatic" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="hero-shine absolute top-0 bottom-0 left-[-100%] w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-10 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] uppercase mb-6">
            <span className="inline-block pb-2 mr-3 md:mr-6 overflow-hidden">
              {"Investasi Terbaik".split(' ').map((word, wI, arr) => (
                <span key={`w1-${wI}`} className="inline-block whitespace-nowrap">
                  {word.split('').map((char, cI) => (
                    <span key={`c1-${wI}-${cI}`} className="hero-title-char inline-block">{char}</span>
                  ))}
                  {wI !== arr.length - 1 && <span className="inline-block">&nbsp;</span>}
                </span>
              ))}
            </span>
            <span className="inline-block pb-2 text-gold overflow-hidden">
              {"Untuk Mobil Terbaik.".split(' ').map((word, wI, arr) => (
                <span key={`w2-${wI}`} className="inline-block whitespace-nowrap">
                  {word.split('').map((char, cI) => (
                    <span key={`c2-${wI}-${cI}`} className="hero-title-char inline-block">{char}</span>
                  ))}
                  {wI !== arr.length - 1 && <span className="inline-block">&nbsp;</span>}
                </span>
              ))}
            </span>
          </h1>

          <p className="hero-sub text-lg md:text-xl text-white/80 max-w-2xl mb-10 font-light leading-relaxed">
            Spesialis ceramic coating, paint protection film, dan vehicle wrapping di Jakarta. Produk bergaransi internasional, dikerjakan oleh certified applicator berpengalaman.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-16">
            <a href="#book" className="hero-btn w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm rounded-none hover:bg-white transition-colors">
              Konsultasi Gratis
            </a>
            <a href="#portfolio" className="hero-btn w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/50 text-white font-bold uppercase tracking-widest text-sm rounded-none hover:bg-white/10 transition-colors">
              Lihat Portfolio
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
            {['Gtechniq Certified Detailer', 'XPEL Authorized Installer', '800+ Mobil Terproteksi', '5 Tahun Warranty'].map((text, i) => (
              <div key={i} className="hero-badge flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                <span className="text-sm font-medium text-white/70 uppercase tracking-wider">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}