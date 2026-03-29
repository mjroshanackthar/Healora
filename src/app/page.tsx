'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Leaf, 
  Wind, 
  Heart, 
  Brain, 
  Sparkles, 
  ChevronRight,
  Plus,
  ArrowUp,
  Instagram,
  Youtube,
  Facebook,
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react';

export default function HealoraPage() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const services = [
    {
      id: "1:1 Coaching",
      title: "1:1 Coaching Session",
      tag: "One-on-One",
      desc: "A deeply personal, focused session designed around your unique emotional landscape.",
      features: ["60-minute personalized session", "Emotional assessment & goal setting", "Custom mindset tools", "WhatsApp support", "Workbook included"],
      color: "var(--navy-primary)",
      msg: "I would love to book a one-on-one coaching session."
    },
    {
      id: "Mindset Reset",
      title: "Mindset Reset Program",
      tag: "Transformation",
      desc: "A structured 4-week journey to completely rewire how you think, feel, and respond to life.",
      features: ["4-week intensive path", "Mindset audit", "Journaling prompts", "Meditation & visualization", "Daily check-ins"],
      color: "var(--steel-blue)",
      msg: "I’m interested in the Mindset Reset Program. Can I get more details?"
    },
    {
      id: "Healing Circle",
      title: "Group Healing Circle",
      tag: "Community",
      desc: "Heal in community. A sacred, supportive group space where souls share and grow together.",
      features: ["Weekly 90-min sessions", "Group reflections", "Private community", "Peer accountability", "Live masterclass"],
      color: "var(--leaf-green)",
      msg: "I’m ready to begin my healing journey with you."
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--steel-blue)] origin-left z-[1001]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[1000] px-[5%] py-4 transition-all duration-500 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm translate-y-0' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <a href="#" className="flex items-center gap-2 text-[var(--navy-deep)] font-serif text-2xl tracking-tight">
            <Leaf className="w-6 h-6 text-[var(--steel-blue)]" />
            <span className="font-light tracking-widest text-xl">HEALORA</span>
          </a>
          
          <ul className="hidden md:flex items-center gap-10">
            {['About', 'Services', 'Stories', 'FAQ'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-xs font-semibold tracking-widest uppercase text-[var(--navy-primary)] hover:text-[var(--steel-blue)] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#contact" 
                className="bg-[var(--navy-primary)] text-white px-6 py-2 rounded-full text-[0.7rem] font-bold tracking-[0.2em] uppercase hover:bg-[var(--steel-blue)] transition-all"
              >
                Connect
              </a>
            </li>
          </ul>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-[var(--navy-deep)] mb-1.5" />
            <div className="w-6 h-0.5 bg-[var(--navy-deep)] mb-1.5" />
            <div className="w-6 h-0.5 bg-[var(--navy-deep)]" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-[5%] hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Sparkles className="absolute top-[20%] left-[15%] w-12 h-12 text-[var(--steel-blue)] animate-pulse" />
          <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] bg-[var(--sky-soft)] opacity-20 blur-[100px] rounded-full" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[var(--steel-blue)]/20 bg-white/50 text-[var(--steel-blue)] text-[0.7rem] font-bold tracking-[0.2em] uppercase mb-8">
            <motion.div 
              animate={{ scale: [1, 1.5, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 rounded-full bg-[var(--steel-blue)]" 
            />
            Emotional Resilience Life Coach
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--navy-deep)] leading-[1.1] mb-8">
            Heal. <em className="text-[var(--steel-blue)] italic font-light">Grow.</em><br />Transform.
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--navy-primary)] font-light leading-relaxed max-w-2xl mx-auto mb-10 opacity-80">
            Helping you become emotionally strong, balanced, and unshakable in life — through deep inner work and compassionate guidance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/917416010351?text=Can%20we%20set%20up%20a%20discovery%20call%20to%20see%20how%20coaching%20can%20help%20me%3F"
              target="_blank"
              className="btn-primary"
            >
              Begin Your Journey <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a href="#about" className="btn-outline">
              Meet Sharmila
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-[5%] bg-white relative overflow-hidden">
        <div className="about-blob absolute -right-20 -top-20 w-[500px] h-[500px] opacity-10" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative z-10 w-full max-w-[400px] aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image 
                src="/sharmila.jpeg" 
                alt="G. A. Sharmila" 
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Rings */}
            {[0, 1, 2].map((i) => (
              <div 
                key={i} 
                className="absolute inset-0 rounded-full border border-[var(--steel-blue)]/10 ring-pulse"
                style={{ 
                  margin: `-${(i + 1) * 30}px`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="section-label">THE FOUNDER</div>
            <h2 className="text-4xl lg:text-5xl font-serif text-[var(--navy-deep)] mb-4">G. A. Sharmila</h2>
            <p className="font-serif italic text-xl text-[var(--steel-blue)] mb-8">Founder of Healora 🌿 | Life Coach</p>
            
            <div className="space-y-6 text-[var(--navy-primary)] font-light leading-relaxed">
              <p>
                I'm <strong>Sharmila</strong> — a certified Emotional Resilience Life Coach on a mission to help you break free from overthinking, self-doubt, and emotional exhaustion. I believe that <span className="text-[var(--steel-blue)] italic underline decoration-[var(--steel-blue)]/20 underline-offset-4">every soul has the capacity to heal, grow, and shine.</span>
              </p>
              <p>
                Deeply inspired by Dr. Sasireka Mam, my journey began with a profound understanding: healing is not about being fixed — it's about becoming whole.
              </p>
              <p>
                Through Healora, I offer a <em className="font-medium">safe, nurturing space</em> where you can rewire your mindset, rebuild your confidence, and step into the most empowered version of yourself.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3 text-[var(--leaf-green)] font-medium text-sm">
              <Sparkles className="w-5 h-5" />
              <span>Spark • Shine • Sustain</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-[5%] bg-[var(--watercolor-bg)]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label justify-center">Services</div>
          <h2 className="text-4xl lg:text-5xl font-serif text-[var(--navy-deep)] mb-6 leading-tight">
            Choose your <em className="italic text-[var(--steel-blue)] font-light">path to healing</em>
          </h2>
          <p className="text-[var(--navy-primary)] opacity-80 font-light">
            Every session is crafted with intention, compassion, and a deep commitment to your transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card hover:bg-white transition-all duration-500 flex flex-col pt-1"
            >
              <div 
                className="h-1 w-full" 
                style={{ background: service.color }}
              />
              <div className="p-8 flex-grow">
                <div className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[var(--steel-blue)] mb-3">{service.tag}</div>
                <h3 className="text-2xl font-serif text-[var(--navy-deep)] mb-4">{service.title}</h3>
                <p className="text-sm text-[var(--navy-primary)] font-light leading-relaxed mb-8 h-12 overflow-hidden">{service.desc}</p>
                
                <ul className="space-y-4 mb-10">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[var(--navy-primary)] font-light pb-3 border-b border-[var(--steel-blue)]/5 last:border-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--leaf-green)] mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={`https://wa.me/917416010351?text=${encodeURIComponent(service.msg)}`}
                  target="_blank"
                  className="btn-whatsapp w-full group relative overflow-hidden"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Connect via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stories / Stats */}
      <section id="stories" className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 bg-[var(--navy-deep)] rounded-[40px] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-[var(--sky-soft)] text-xl font-serif italic font-light opacity-10 leading-none select-none">HEALORA</div>
            
            {[
              { label: "Lives Impacted", val: "200+" },
              { label: "Sessions Completed", val: "500+" },
              { label: "YouTube Views", val: "10,000+" },
              { label: "Years of Passion", val: "5+" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-serif mb-2">{stat.val}</div>
                <div className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[var(--sky-soft)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-[5%] bg-[var(--mist-white)] relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <div className="section-label">GET IN TOUCH</div>
            <h2 className="text-5xl font-serif text-[var(--navy-deep)] mb-8 leading-tight">
              Ready to <em className="italic text-[var(--steel-blue)] font-light underline decoration-[var(--steel-blue)]/20 underline-offset-8">begin?</em>
            </h2>
            <p className="text-[var(--navy-primary)] font-light leading-relaxed mb-12 italic text-lg opacity-80">
              "The most courageous thing you can do is take the first step towards healing. I am here, ready to walk this path with you."
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, text: "+91 7416 010 351 (WhatsApp)", href: "https://wa.me/917416010351?text=I%E2%80%99m%20ready%20to%20begin%20my%20healing%20journey%20with%20you." },
                { icon: Mail, text: "sharmilifecoach04@gmail.com", href: "mailto:sharmilifecoach04@gmail.com" },
                { icon: Instagram, text: "@sharmila.lifecoach", href: "https://www.instagram.com/sharmila.lifecoach" },
                { icon: Youtube, text: "Spark and Shine with Sharmila", href: "https://www.youtube.com/@SparkandShinewithSharmila" },
                { icon: Facebook, text: "Sharmila Ghulam Ali", href: "https://www.facebook.com/profile.php?id=100011099827359&ref=PROFILE_EDIT_ig_profile_ac" }
              ].map((item) => (
                <a 
                  key={item.text} 
                  href={item.href} 
                  target="_blank"
                  className="flex items-center gap-4 text-[var(--navy-deep)] hover:text-[var(--steel-blue)] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border border-[var(--steel-blue)]/20 flex items-center justify-center group-hover:bg-[var(--steel-blue)] group-hover:text-white transition-all">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-[32px] shadow-2xl shadow-[var(--shadow-blue)] border border-[var(--steel-blue)]/5">
            <h3 className="text-2xl font-serif text-[var(--navy-deep)] mb-8 underline decoration-[var(--steel-blue)]/10 underline-offset-4">Sacred Connection</h3>
            <div className="space-y-6">
              <div>
                <label className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--steel-blue)] block mb-2 uppercase">Your Name</label>
                <input type="text" className="w-full bg-[var(--watercolor-bg)]/50 border-0 rounded-xl px-4 py-3 placeholder:text-[var(--navy-primary)]/30 text-sm focus:ring-2 focus:ring-[var(--steel-blue)]/20 outline-none" placeholder="What shall I call you?" />
              </div>
              <div>
                <label className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--steel-blue)] block mb-2 uppercase">Email Address</label>
                <input type="email" className="w-full bg-[var(--watercolor-bg)]/50 border-0 rounded-xl px-4 py-3 placeholder:text-[var(--navy-primary)]/30 text-sm focus:ring-2 focus:ring-[var(--steel-blue)]/20 outline-none" placeholder="your@email.com" />
              </div>
              <div>
                <label className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--steel-blue)] block mb-2 uppercase">Your Message</label>
                <textarea className="w-full bg-[var(--watercolor-bg)]/50 border-0 rounded-xl px-4 py-3 placeholder:text-[var(--navy-primary)]/30 text-sm focus:ring-2 focus:ring-[var(--steel-blue)]/20 outline-none h-32" placeholder="Tell me a little about where you are right now..." />
              </div>
              <button className="btn-primary w-full justify-center py-4 bg-[var(--navy-deep)]">Send My Message</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--navy-deep)] text-white/60 py-20 px-[5%] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 mb-20">
          <div>
            <div className="font-serif text-3xl text-white mb-4 tracking-wider">HEALORA</div>
            <div className="text-[var(--sky-soft)] text-[0.6rem] font-bold tracking-[0.3em] uppercase mb-6">Spark • Shine • Sustain</div>
            <p className="text-sm font-light leading-relaxed max-w-xs">
              A safe, nurturing space for emotional healing, inner strength, and profound personal growth. Founded with love by G. A. Sharmila.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-8">Navigate</h4>
            <ul className="space-y-4 text-xs tracking-widest uppercase">
              {['About', 'Services', 'Stories', 'FAQ'].map(item => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-8">Social Connection</h4>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/sharmila.lifecoach" },
                { Icon: Youtube, href: "https://www.youtube.com/@SparkandShinewithSharmila" },
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=100011099827359&ref=PROFILE_EDIT_ig_profile_ac" },
                { Icon: Mail, href: "mailto:sharmilifecoach04@gmail.com" }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[var(--navy-deep)] transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-[0.65rem] tracking-[0.1em]">
          <span>© 2026 HEALORA. All rights reserved.</span>
          <span className="italic font-serif text-[1rem] text-[var(--sky-soft)] tracking-wider">Spark • Shine • Sustain</span>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-[999]">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`w-12 h-12 rounded-full bg-[var(--navy-primary)] text-white shadow-xl flex items-center justify-center transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          href="https://wa.me/917416010351?text=Can%20we%20set%20up%20a%20discovery%20call%20to%20see%20how%20coaching%20can%20help%20me%3F"
          target="_blank"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center wa-pulse group relative"
        >
          <div className="absolute right-full mr-4 bg-[var(--navy-deep)] text-white px-3 py-1.5 rounded-full text-[0.65rem] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Chat with Sharmila</div>
          <MessageCircle className="w-7 h-7" />
        </motion.a>
      </div>
    </div>
  );
}
