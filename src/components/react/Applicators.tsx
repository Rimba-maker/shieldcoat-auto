import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const team = [
  { name: 'Dimas Prasetyo', role: 'Lead Applicator', cert: 'Gyeon & Gtechniq', exp: '8 Tahun', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
  { name: 'Reza Maulana', role: 'PPF Specialist', cert: 'XPEL Certified', exp: '6 Tahun', img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop' },
  { name: 'Andre Kusuma', role: 'Wrapping Specialist', cert: '3M & Avery', exp: '5 Tahun', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop' },
  { name: 'Bayu Hartono', role: 'Paint Correction', cert: 'Rupes Trained', exp: '7 Tahun', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
];

export default function Applicators() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.app-header > *', {
      scrollTrigger: { trigger: '.app-header', start: 'top 80%' },
      y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
    });

    gsap.from('.app-card', {
      scrollTrigger: { trigger: '.app-grid', start: 'top 75%' },
      y: 80, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section id="team" ref={container} className="py-20 md:py-32 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="app-header text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Tim Certified Applicator</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase mb-6 text-white leading-tight">
            Presisi Di Tangan Ahli
          </h3>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            Pekerjaan premium membutuhkan skill premium. Tim kami tidak belajar dari YouTube, melainkan tersertifikasi langsung oleh principal brand.
          </p>
        </div>

        <div className="app-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="app-card group relative bg-surface border border-white/10 overflow-hidden cursor-pointer hover:border-gold transition-colors duration-500 rounded-none">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover opacity-70 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black to-transparent">
                <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-1">{member.role}</span>
                <h4 className="font-display font-bold text-xl uppercase text-white mb-2">{member.name}</h4>
                <div className="flex justify-between items-center text-xs text-white/60 border-t border-white/10 pt-3 mt-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <span>{member.cert}</span>
                  <span>{member.exp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}