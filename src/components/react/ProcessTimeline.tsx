import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  { title: 'Paint Inspection', desc: 'Multi-angle inspection + paint depth gauge. Identifikasi swirl, scratch, oxidation.', icon: '🔍' },
  { title: 'Decontamination Wash', desc: 'Snow foam + 2-bucket wash, iron remover, tar remover. Angkat kontaminan kimia & fisik.', icon: '🚿' },
  { title: 'Clay Bar Treatment', desc: 'Angkat kontaminan membandel agar permukaan cat benar-benar mulus untuk bonding coating.', icon: '🟦' },
  { title: 'Paint Correction', desc: 'Machine polish (Rupes/Festool). Stage 1-2 correction untuk paint grade 9-9.5/10.', icon: '✨' },
  { title: 'Panel Wipe (IPA)', desc: 'Isopropyl alcohol wipe untuk angkat sisa polish oil. Surface harus "naked" sebelum coating.', icon: '💦' },
  { title: 'Coating Application', desc: 'Apply coating di environment terkontrol (suhu/debu). Curing time 24-48 jam.', icon: '🛡️' },
];

export default function ProcessTimeline() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header reveal
    gsap.from('.process-header > *', {
      scrollTrigger: {
        trigger: '.process-header',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Timeline Line Draw
    gsap.from('.timeline-line', {
      scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top 70%',
        end: 'bottom 50%',
        scrub: 1,
      },
      scaleY: 0,
      transformOrigin: 'top center',
      ease: 'none',
    });

    // Step Items Stagger
    const stepItems = gsap.utils.toArray('.step-item');
    stepItems.forEach((step: any, i) => {
      gsap.from(step, {
        scrollTrigger: {
          trigger: step,
          start: 'top 85%',
        },
        x: i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    });

  }, { scope: container });

  return (
    <section id="process" ref={container} className="py-20 md:py-32 bg-surface border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="process-header text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Proses Persiapan</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase mb-6 text-white leading-tight">
            Tidak Ada Shortcut
          </h3>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            Coating di atas cat yang rusak adalah sia-sia. Itulah mengapa proses pre-coating (paint correction) kami kerjakan dengan tingkat presisi tertinggi.
          </p>
        </div>

        <div className="timeline-container relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="timeline-line absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`step-item relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Node */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 md:w-10 md:h-10 bg-black border-2 border-gold flex items-center justify-center -translate-x-1/2 z-10 rounded-none shadow-[0_0_15px_rgba(255,192,0,0.3)]">
                  <span className="text-white text-[10px] md:text-xs font-display font-bold">{index + 1}</span>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12 flex flex-col justify-center">
                  <div className={`p-5 md:p-8 bg-black border border-white/5 hover:border-gold/50 transition-colors duration-300 group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`text-3xl mb-3 md:mb-4 transition-all ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>{step.icon}</div>
                    <h4 className="font-display font-bold text-lg md:text-xl uppercase mb-2 md:mb-3 text-white break-words">
                      {step.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}