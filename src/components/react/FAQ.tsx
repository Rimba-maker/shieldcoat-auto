import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const faqs = [
  { 
    q: 'Apa bedanya ceramic coating vs wax biasa?', 
    a: 'Wax life 3-4 bulan, harus reapply rutin, tidak tahan kimia keras. Ceramic coating mengeras dan bonding ke clear coat, durabilitas 1-5 tahun, tahan UV, acid rain, dan bird dropping.' 
  },
  { 
    q: 'Apakah mobil bisa langsung dipakai setelah coating?', 
    a: 'Dibutuhkan curing time 24-48 jam. Sangat disarankan jangan sampai terkena air atau dicuci dengan sabun selama 7 hari pertama agar coating matang sempurna.' 
  },
  { 
    q: 'PPF self-healing berarti goresan apapun bisa hilang?', 
    a: 'Self-healing hanya berlaku untuk light scratch & swirl (seperti bekas lap) yang tidak tembus menembus lapisan TPU film. Goresan dalam yang merobek film tidak bisa self-heal.' 
  },
  { 
    q: 'Berapa lama waktu pengerjaan?', 
    a: 'Paint correction + coating: 2-4 hari. PPF full body: 3-5 hari. Wrapping full body: 2-4 hari. Waktu bervariasi tergantung kondisi awal cat dan kompleksitas bentuk mobil.' 
  },
  { 
    q: 'Bisa konsultasi dulu sebelum memutuskan?', 
    a: 'Ya, inspeksi dan konsultasi 100% gratis. Kami akan mengukur ketebalan cat (paint depth gauge) dan memberikan rekomendasi objektif berdasarkan kondisi nyata mobil Anda.' 
  },
];

export default function FAQ() {
  const container = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useGSAP(() => {
    gsap.from('.faq-header > *', {
      scrollTrigger: { trigger: '.faq-header', start: 'top 80%' },
      y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
    });

    gsap.from('.faq-item', {
      scrollTrigger: { trigger: '.faq-list', start: 'top 75%' },
      y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
    });
  }, { scope: container });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={container} className="py-20 md:py-32 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="faq-header text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">FAQ Teknis</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase text-white leading-tight">
            Yang Sering Ditanyakan
          </h3>
        </div>

        <div className="faq-list space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item border transition-colors duration-300 ${isOpen ? 'border-gold bg-surface' : 'border-white/10 bg-black hover:border-white/30'}`}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-display font-bold text-lg uppercase text-white pr-8">{faq.q}</span>
                  <span className={`text-gold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}