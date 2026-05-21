import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const tiers = [
  {
    name: 'Shield Entry',
    price: 'Rp 3.5 jt - 5 jt',
    durability: '1-2 tahun',
    popular: false,
    features: [
      'Gyeon Quartz ONE coating',
      'Hydrophobic protection',
      'Gloss enhancement',
      '1 tahun warranty',
      'Free 1x maintenance wash',
    ],
    target: 'daily driver, pertama kali coating'
  },
  {
    name: 'Shield Professional',
    price: 'Rp 6 jt - 9 jt',
    durability: '3 tahun',
    popular: true,
    features: [
      'Gtechniq Crystal Serum Light',
      'Paint correction 1-stage',
      'Advanced hydrophobic + self-cleaning',
      'UV & chemical resistance',
      '3 tahun warranty',
      'Free quarterly maintenance wash',
    ],
    target: 'semi-premium, enthusiast'
  },
  {
    name: 'Shield Ultimate',
    price: 'Rp 12 jt - 18 jt',
    durability: '5 tahun',
    popular: false,
    features: [
      'Gyeon MOHS EVO / Ceramic Pro Gold',
      'Full paint correction 2-stage',
      'Decontamination + clay bar',
      'Coating semua surface',
      '5 tahun warranty',
      'Annual inspection + top-up',
    ],
    target: 'premium & luxury car'
  }
];

export default function CoatingTiers() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header reveal
    gsap.from('.tiers-header > *', {
      scrollTrigger: {
        trigger: '.tiers-header',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Cards stagger
    gsap.from('.tier-card', {
      scrollTrigger: {
        trigger: '.tiers-grid',
        start: 'top 75%',
      },
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Highlight glow for popular card
    gsap.to('.popular-glow', {
      opacity: 0.8,
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: container });

  return (
    <section id="tiers" ref={container} className="py-20 md:py-32 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="tiers-header text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Level Perlindungan</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase mb-6 text-white leading-tight">
            Pilih Armor Anda
          </h3>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            Semua level menggunakan coating grade profesional. Perbedaannya terletak pada ketahanan kimia, lapisan, dan durasi garansi internasional.
          </p>
        </div>

        <div className="tiers-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:p-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`tier-card relative bg-surface border p-6 md:p-8 flex flex-col justify-between group cursor-pointer transition-colors duration-500 rounded-none ${
                tier.popular ? 'border-gold z-10' : 'border-white/10 hover:border-white/30'
              }`}
            >
              {tier.popular && (
                <div className="popular-glow absolute inset-0 bg-gold blur-2xl opacity-0 -z-10 mix-blend-screen pointer-events-none"></div>
              )}
              
              <div>
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-xs font-bold uppercase tracking-widest px-4 py-1">
                    Most Popular
                  </span>
                )}
                <h4 className="font-display font-bold text-xl md:text-2xl uppercase mb-2 text-white">{tier.name}</h4>
                <div className="text-3xl font-light text-gold mb-2">{tier.price}</div>
                <div className="text-sm text-white/50 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
                  Durability: {tier.durability}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xs text-white/40 italic mb-6">Cocok untuk: {tier.target}</div>
                <a href="#book" className={`block w-full text-center py-4 uppercase tracking-widest text-sm font-bold transition-colors ${
                  tier.popular ? 'bg-gold text-black hover:bg-white' : 'bg-transparent border border-white/30 text-white hover:bg-white/10'
                }`}>
                  Pilih Tier Ini
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-white/40 text-xs mt-12 italic">* Harga bervariasi berdasarkan ukuran kendaraan (Hatchback / Sedan / SUV / MPV / Supercar).</p>
      </div>
    </section>
  );
}