import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const facilities = [
  { title: 'Controlled Environment', desc: 'AC + dust-free filter, suhu 20-25°C, bebas debu saat aplikasi coating.', img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop' },
  { title: 'LED Inspection Lighting', desc: 'Gyeon & Scangrip multi-angle untuk mendeteksi imperfection terkecil.', img: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop' },
  { title: 'Dedicated Wash Bay', desc: 'Area cuci terpisah dengan water pressure & foam cannon sistem.', img: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800&auto=format&fit=crop' },
];

export default function WorkshopGallery() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.work-header > *', {
      scrollTrigger: { trigger: '.work-header', start: 'top 80%' },
      y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
    });

    gsap.from('.work-item', {
      scrollTrigger: { trigger: '.work-grid', start: 'top 75%' },
      y: 100, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section id="workshop" ref={container} className="py-20 md:py-32 bg-surface border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="work-header text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Tempat Kerja Kami</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase mb-6 text-white leading-tight">
            Fasilitas Standar Global
          </h3>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            Coating membutuhkan lingkungan yang terkontrol. Debu, suhu, dan kelembaban sangat mempengaruhi hasil akhir. Inilah alasan mengapa fasilitas kami dibangun berbeda.
          </p>
        </div>

        <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, i) => (
            <div key={i} className="work-item relative group cursor-pointer overflow-hidden border border-white/10 rounded-none bg-black h-80">
              <img src={fac.img} alt={fac.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h4 className="font-display font-bold text-xl uppercase text-white mb-2 transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">{fac.title}</h4>
                <p className="text-white/60 text-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}