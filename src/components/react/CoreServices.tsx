import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
  {
    id: '01',
    title: 'Ceramic Coating',
    desc: 'Lapisan perlindungan liquid glass yang mengeras di atas clear coat. Hydrophobic, anti-UV, anti-swirl. Durasi 1-5 tahun.',
    price: 'Mulai Rp 3.5 jt',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop', // Replace with correct image later
  },
  {
    id: '02',
    title: 'Paint Protection Film',
    desc: 'Film TPU self-healing yang melindungi cat dari rock chip, kerikil, dan goresan. Self-healing under heat. Durasi 7-10 tahun.',
    price: 'Mulai Rp 8 jt',
    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Vehicle Wrapping',
    desc: 'Ubah warna atau texture mobil dengan vinyl premium tanpa cat ulang. Reversible, ratusan pilihan warna & finish.',
    price: 'Mulai Rp 15 jt',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'Paint Correction',
    desc: 'Pre-coating mandatory: decontamination + polish untuk angkat swirl, water spot, dan micro scratch. Tanpa ini, coating tidak bisa optimal.',
    price: 'Mulai Rp 1.5 jt',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800&auto=format&fit=crop',
  }
];

export default function CoreServices() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header animation
    gsap.from('.services-header > *', {
      scrollTrigger: {
        trigger: '.services-header',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Cards animation
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 75%',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // Card Hover Animations
    const cards = gsap.utils.toArray('.service-card') as HTMLElement[];
    cards.forEach((card) => {
      const img = card.querySelector('.service-img');
      const content = card.querySelector('.service-content');
      const overlay = card.querySelector('.service-overlay');

      const hoverTl = gsap.timeline({ paused: true })
        .to(img, { scale: 1.05, duration: 0.5, ease: 'power2.out' }, 0)
        .to(overlay, { backgroundColor: 'rgba(0,0,0,0.4)', duration: 0.5 }, 0)
        .to(content, { y: -10, duration: 0.4, ease: 'power2.out' }, 0);

      card.addEventListener('mouseenter', () => hoverTl.play());
      card.addEventListener('mouseleave', () => hoverTl.reverse());
    });
  }, { scope: container });

  return (
    <section id="services" ref={container} className="py-20 md:py-32 bg-surface border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="services-header mb-20 max-w-2xl">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Core Services</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase mb-6 text-white leading-tight">
            Apa Yang Kami Lakukan
          </h3>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            Spesialis tiga layanan utama perlindungan mobil — bukan generalis yang semua dikerjakan setengah-setengah.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card group relative h-auto min-h-[400px] overflow-hidden bg-black rounded-none cursor-pointer border border-white/10">
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-img w-full h-full object-cover opacity-60 transition-all duration-700"
                />
                <div className="service-overlay absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                <div className="flex justify-between items-start">
                  <span className="font-display text-gold text-xl font-bold">{service.id}</span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
                
                <div className="service-content transform translate-y-4">
                  <h4 className="font-display font-bold text-2xl uppercase mb-3 text-white">{service.title}</h4>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2 max-w-sm">{service.desc}</p>
                  <span className="inline-block px-4 py-2 border border-gold text-gold text-xs font-bold uppercase tracking-wider">
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}