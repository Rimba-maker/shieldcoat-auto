import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const wraps = [
  {
    title: 'Color Change Wrap',
    desc: 'Solid color, metallic, pearl — ratusan pilihan finish.',
    price: 'Full body: Rp 15 - 30 jt',
    features: ['Gloss, matte, satin finish', 'Reversible tanpa merusak cat'],
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Specialty Finish',
    desc: 'Tekstur dan pantulan cahaya yang tidak bisa dicapai dengan cat biasa.',
    price: 'Full body: Rp 25 - 60 jt',
    features: ['Chrome (mirror effect)', 'Color shift / chameleon', 'Carbon fiber look'],
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Accent & Partial',
    desc: 'Kombinasi warna untuk menonjolkan karakter agresif mobil Anda.',
    price: 'Mulai Rp 2.5 jt / panel',
    features: ['Roof wrap (black out)', 'Racing stripe', 'Chrome delete'],
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Wrapping() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.wrap-header > *', {
      scrollTrigger: {
        trigger: '.wrap-header',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

    gsap.from('.wrap-card', {
      scrollTrigger: {
        trigger: '.wrap-grid',
        start: 'top 75%',
      },
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section id="wrapping" ref={container} className="py-20 md:py-32 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="wrap-header text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Vehicle Wrapping</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase mb-6 text-white leading-tight">
            Ekspresi Tanpa Batas
          </h3>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            Ganti warna tanpa cat ulang. Ratusan pilihan warna dan tekstur premium dari brand ternama, diaplikasikan dengan presisi tinggi.
          </p>
        </div>

        <div className="wrap-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {wraps.map((wrap, index) => (
            <div key={index} className="wrap-card bg-surface border border-white/10 group cursor-pointer hover:border-gold transition-colors duration-500 rounded-none flex flex-col h-full">
              <div className="relative h-64 overflow-hidden border-b border-white/10">
                <img 
                  src={wrap.image} 
                  alt={wrap.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="font-display font-bold text-2xl uppercase mb-3 text-white">{wrap.title}</h4>
                <p className="text-white/60 text-sm mb-6 flex-grow">{wrap.desc}</p>
                <ul className="space-y-2 mb-8">
                  {wrap.features.map((feat, i) => (
                    <li key={i} className="text-sm text-white/80 flex gap-2">
                      <span className="text-gold">-</span> {feat}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-white/10 pt-4">
                  <span className="font-bold text-gold uppercase tracking-wider text-sm">{wrap.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border border-white/10 bg-surface p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="font-display font-bold uppercase text-white mb-2">Premium Materials Only</h4>
            <p className="text-white/50 text-sm">3M 1080 Series • Avery Dennison • Oracal • Hexis</p>
          </div>
          <p className="text-sm text-white/70 max-w-md md:text-right border-l md:border-l-0 md:border-r border-gold pl-4 md:pl-0 md:pr-4">
            <strong className="text-white">Wrapping ≠ wrap tanpa prep.</strong> Kami selalu melakukan surface clean & decon sebelum apply — hasilnya lebih rata & tahan lama.
          </p>
        </div>
      </div>
    </section>
  );
}