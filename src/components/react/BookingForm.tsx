import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function BookingForm() {
  const container = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carType: '',
    services: [] as string[],
    condition: '',
    message: ''
  });

  useGSAP(() => {
    gsap.from('.book-header > *', {
      scrollTrigger: { trigger: '.book-header', start: 'top 80%' },
      y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
    });

    gsap.from('.book-form', {
      scrollTrigger: { trigger: '.book-form', start: 'top 75%' },
      y: 50, opacity: 0, duration: 1, ease: 'power3.out',
    });
  }, { scope: container });

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const adminPhone = "6281234567890"; // Ganti dengan nomor asli
    const text = `*Booking Konsultasi ShieldCoat Auto*%0A%0A*Nama:* ${formData.name}%0A*Tipe Mobil:* ${formData.carType}%0A*Layanan:* ${formData.services.join(', ')}%0A*Kondisi Cat:* ${formData.condition}%0A*Pesan:* ${formData.message}`;
    
    const waUrl = `https://wa.me/${adminPhone}?text=${text}`;
    window.open(waUrl, '_blank');
  };

  const inputClasses = "w-full bg-black border border-white/20 p-4 text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors rounded-none font-light";

  return (
    <section id="book" ref={container} className="py-20 md:py-32 bg-surface border-t border-white/10 relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute -top-[20%] -right-[10%] w-[50%] aspect-square border border-white/5 rotate-12 pointer-events-none" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="book-header text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Mulai Perjalanan Anda</h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase mb-6 text-white leading-tight">
            Book Konsultasi & Inspeksi
          </h3>
          <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Inspeksi dan konsultasi gratis. Bawa mobil ke workshop kami atau tim kami yang akan visit untuk fleet.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="book-form bg-black border border-white/10 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Nama Lengkap</label>
              <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={inputClasses} placeholder="Cth: Budi Santoso" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">WhatsApp</label>
              <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className={inputClasses} placeholder="Cth: 0812..." />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Tipe & Tahun Mobil</label>
            <input type="text" required value={formData.carType} onChange={e => setFormData({...formData, carType: e.target.value})} className={inputClasses} placeholder="Cth: BMW 330i 2023" />
          </div>

          <div className="mb-8">
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-4">Layanan Yang Diminati</label>
            <div className="flex flex-wrap gap-3">
              {['Ceramic Coating', 'PPF', 'Wrapping', 'Paint Correction'].map(svc => (
                <button
                  key={svc}
                  type="button"
                  onClick={() => toggleService(svc)}
                  className={`px-4 py-2 text-sm uppercase tracking-wider font-bold transition-colors border rounded-none ${
                    formData.services.includes(svc) 
                      ? 'bg-gold border-gold text-black' 
                      : 'bg-transparent border-white/20 text-white/70 hover:border-white/50'
                  }`}
                >
                  {svc}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Kondisi Cat Saat Ini</label>
            <select required value={formData.condition} onChange={e => setFormData({...formData, condition: e.target.value})} className={`${inputClasses} appearance-none cursor-pointer`}>
              <option value="" disabled>Pilih kondisi...</option>
              <option value="Baru (Dari Dealer)">Baru (Dari Dealer)</option>
              <option value="Ada swirl/baret halus">Ada swirl / baret halus</option>
              <option value="Kusam / banyak water spot">Kusam / banyak water spot</option>
              <option value="Tidak tahu (Butuh Inspeksi)">Tidak tahu (Butuh Inspeksi)</option>
            </select>
          </div>

          <div className="mb-10">
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Pesan / Pertanyaan Tambahan</label>
            <textarea rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className={inputClasses} placeholder="Ceritakan detail yang ingin Anda tanyakan..."></textarea>
          </div>

          <button type="submit" className="w-full bg-gold text-black font-bold uppercase tracking-widest py-5 text-sm hover:bg-white transition-colors rounded-none">
            Kirim via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}