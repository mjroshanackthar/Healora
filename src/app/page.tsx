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
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Menu,
  X
} from 'lucide-react';

const BASE_PATH = '';

export default function HealoraPage() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Form State
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

    // Active Section Observer
    const sections = ['hero', 'about', 'services', 'stories', 'faq', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-10% 0px -70% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  if (!mounted) return null;

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Replace 'XXXXX' with your real Formspree ID once you have it
      // For now, it will attempt a generic submission
      const response = await fetch('https://formspree.io/f/xeepanpr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Healora Message from ${data.name}`
        })
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const services = [
    {
      id: "1:1 Coaching",
      title: "1:1 Coaching Session",
      tag: "One-on-One",
      desc: "A deeply personal, focused session designed around your unique emotional landscape.",
      features: ["60-minute personalized session", "Emotional assessment & goal setting", "Custom mindset tools", "WhatsApp support", "Self-Discovery Practices"],
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
    },
    {
      id: "Parent Session",
      title: "Emotionally Aware Parenting Workshop",
      tag: "Parent Session",
      desc: "A guided session to help parents raise emotionally strong, confident, and balanced children.",
      features: [
        "Interactive session (60–90 mins)",
        "Child mindset & emotional needs",
        "Responding vs reacting",
        "Strengthening parent-child bond",
        "Healthy boundaries & communication",
        "Real-life scenarios & guidance"
      ],
      color: "var(--earth-warm)",
      msg: "I’m interested in the Emotionally Aware Parenting Workshop for my family."
    },
    {
      id: "Student Resilience",
      title: "Emotional Resilience Workshop",
      tag: "School / College Session",
      desc: "A transformative session designed to help students build inner strength, emotional balance, and a growth mindset.",
      features: [
        "Interactive workshop (60–90 mins)",
        "Emotional awareness & regulation",
        "Overthinking & stress control",
        "Confidence & clarity building",
        "Practical mindset tools",
        "Guided exercises & sharing"
      ],
      color: "var(--wisdom-purple)",
      msg: "I’d like to inquire about an Emotional Resilience Workshop for my institution."
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
        className={`fixed top-0 left-0 right-0 z-[1000] px-[5%] py-4 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm translate-y-0' : 'bg-transparent'
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
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className={`text-xs font-semibold tracking-widest uppercase transition-all duration-300 relative group py-1 ${activeSection === item.toLowerCase() ? 'text-[var(--steel-blue)]' : 'text-[var(--navy-primary)] hover:text-[var(--steel-blue)]'
                    }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] bg-[var(--steel-blue)] transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className={`px-6 py-2 rounded-full text-[0.7rem] font-bold tracking-[0.2em] uppercase transition-all duration-300 border ${activeSection === 'contact' ? 'bg-[var(--steel-blue)] border-[var(--steel-blue)] text-white' : 'bg-[var(--navy-primary)] border-[var(--navy-primary)] text-white hover:bg-[var(--steel-blue)] hover:border-[var(--steel-blue)]'
                  }`}
              >
                Connect
              </a>
            </li>
          </ul>

          <button
            className="md:hidden p-2 text-[var(--navy-deep)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md"
            >
              <div className="flex flex-col gap-6 py-10 px-4 border-t border-[var(--steel-blue)]/10">
                {['About', 'Services', 'Stories', 'FAQ'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => scrollToSection(e, item.toLowerCase())}
                    className={`text-lg font-serif transition-colors ${activeSection === item.toLowerCase() ? 'text-[var(--steel-blue)]' : 'text-[var(--navy-deep)] hover:text-[var(--steel-blue)]'
                      }`}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className={`px-8 py-4 rounded-xl text-center text-[0.7rem] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${activeSection === 'contact' ? 'bg-[var(--steel-blue)] text-white' : 'bg-[var(--navy-primary)] text-white'
                    }`}
                >
                  Connect
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-20 px-[5%] hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="absolute top-[25%] left-[8%] md:left-[15%] w-8 md:w-12 h-8 md:h-12 text-[var(--steel-blue)] animate-pulse opacity-10" />
          <div className="absolute top-[40%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[var(--sky-soft)] opacity-[0.05] blur-[100px] rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 text-center max-w-5xl px-4"
        >
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[var(--steel-blue)]/20 bg-white/40 text-[var(--steel-blue)] text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.25em] uppercase mb-10">
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="w-1.5 h-1.5 rounded-full bg-[var(--steel-blue)]"
            />
            Certified Emotional Resilience Life Coach
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[var(--navy-deep)] leading-[0.95] mb-10 tracking-tight">
            Heal. <em className="text-[var(--steel-blue)] italic font-light drop-shadow-sm">Grow.</em><br />Transform.
          </h1>

          <p className="text-xl md:text-2xl text-[var(--navy-primary)] font-light leading-relaxed max-w-3xl mx-auto mb-12 opacity-90 italic">
            Helping you become emotionally strong, balanced, and unshakable in life — through deep inner work and compassionate guidance.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/917416010351?text=Can%20we%20set%20up%20a%20discovery%20call%20to%20see%20how%20coaching%20can%20help%20me%3F"
              target="_blank"
              className="btn-primary px-10 py-5 text-sm"
            >
              Begin Your Journey
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="text-[0.7rem] font-bold tracking-[0.2em] text-[var(--steel-blue)] uppercase border-b border-[var(--steel-blue)]/30 pb-1 hover:border-[var(--steel-blue)] transition-all"
            >
              Learn about Sharmila
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
                src={`${BASE_PATH}/sharmila.jpeg`}
                alt="Sharmila G A"
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
            <h2 className="text-4xl lg:text-5xl font-serif text-[var(--navy-deep)] mb-4">Sharmila G A</h2>
            <p className="font-serif italic text-xl text-[var(--steel-blue)] mb-8">Founder of Healora 🌿 | Life Coach</p>

            <div className="space-y-6 text-[var(--navy-primary)] font-light leading-relaxed">
              <p>
                I'm <strong>Sharmila</strong> — a certified Emotional Resilience Life Coach on a mission to help you break free from overthinking, self-doubt, and emotional exhaustion. I believe that <span className="text-[var(--steel-blue)] italic underline decoration-[var(--steel-blue)]/20 underline-offset-4">every soul has the capacity to heal, grow, and shine.</span>
              </p>
              <p>
                Student of Dr. Sasireka Mam, my journey began with a profound understanding: healing is not about being fixed — it's about becoming whole.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 bg-[var(--navy-deep)] rounded-[40px] p-10 md:p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-[var(--sky-soft)] text-xl font-serif italic font-light opacity-10 leading-none select-none">HEALORA</div>

            {[
              { text: "Healing with Compassion" },
              { text: "Empowering Inner Strength" },
              { text: "Mindset Transformation" },
              { text: "Guided Growth Journey" }
            ].map((item) => (
              <div key={item.text} className="text-center group">
                <div className="text-2xl md:text-4xl mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <div className="text-sm md:text-lg font-serif text-white leading-snug tracking-wide max-w-[150px] md:max-w-[200px] mx-auto italic font-light opacity-90">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-[5%] bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label justify-center">Inquiry</div>
            <h2 className="text-4xl lg:text-5xl font-serif text-[var(--navy-deep)] mb-6">
              Frequently Asked <em className="italic text-[var(--steel-blue)] font-light">Questions</em>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is Emotional Resilience Coaching?",
                a: "It's a process of building your internal strength to handle life's challenges without feeling overwhelmed. We focus on tools that help you bounce back faster and stay grounded."
              },
              {
                q: "How many sessions do I need?",
                a: "Healing is a journey, not a sprint. While every soul's path is unique, most clients start feeling a profound shift within 4 to 6 sessions."
              },
              {
                q: "Is this the same as traditional therapy?",
                a: "While both are valuable, coaching focuses on your 'now' and your 'next.' We look at where you are today and build the mindset and tools to get you where you want to be."
              },
              {
                q: "Can I reach out between sessions?",
                a: "Absolutely. I provide WhatsApp support to all my regular clients to ensure you feel supported even when the session ends."
              }
            ].map((faq, i) => (
              <div
                key={i}
                className={`border border-[var(--steel-blue)]/10 rounded-2xl overflow-hidden transition-all duration-500 ${activeFaq === i ? 'bg-[var(--watercolor-bg)] shadow-lg' : 'bg-white hover:border-[var(--steel-blue)]/30'
                  }`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
                >
                  <span className="font-serif text-lg text-[var(--navy-deep)]">{faq.q}</span>
                  <div className={`transition-transform duration-500 ${activeFaq === i ? 'rotate-45' : ''}`}>
                    <Plus className="w-5 h-5 text-[var(--steel-blue)]" />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="px-8 pb-8 text-[var(--navy-primary)] font-light leading-relaxed">
                        <div className="w-full h-px bg-[var(--steel-blue)]/10 mb-6" />
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                { icon: Mail, text: "sharmilalifecoach04@gmail.com", href: "mailto:sharmilalifecoach04@gmail.com" },
                { icon: Instagram, text: "@sharmila.lifecoach", href: "https://www.instagram.com/sharmila.lifecoach" },
                { icon: Youtube, text: "Spark and Shine with Sharmila", href: "https://www.youtube.com/@SparkandShinewithSharmila" },
                { icon: Linkedin, text: "Sharmila Ghulaumali", href: "https://www.linkedin.com/in/sharmila-ghulaumali-7a47173b0/" }
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

            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--leaf-green)]/10 text-[var(--leaf-green)] flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-serif text-[var(--navy-deep)] mb-3">Message Received ✨</h4>
                  <p className="text-sm text-[var(--navy-primary)] opacity-80 font-light leading-relaxed">
                    Thank you, your message has been safely delivered to Sharmila. We will connect with you shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 text-[0.65rem] font-bold tracking-[0.2em] text-[var(--steel-blue)] uppercase hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--steel-blue)] block mb-2 uppercase">Your Name</label>
                    <input name="name" required type="text" className="w-full bg-[var(--watercolor-bg)]/50 border-0 rounded-xl px-4 py-3 placeholder:text-[var(--navy-primary)]/30 text-sm focus:ring-2 focus:ring-[var(--steel-blue)]/20 outline-none" placeholder="What shall I call you?" />
                  </div>
                  <div>
                    <label className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--steel-blue)] block mb-2 uppercase">Email Address</label>
                    <input name="email" required type="email" className="w-full bg-[var(--watercolor-bg)]/50 border-0 rounded-xl px-4 py-3 placeholder:text-[var(--navy-primary)]/30 text-sm focus:ring-2 focus:ring-[var(--steel-blue)]/20 outline-none" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-[0.65rem] font-bold tracking-[0.2em] text-[var(--steel-blue)] block mb-2 uppercase">Your Message</label>
                    <textarea name="message" required className="w-full bg-[var(--watercolor-bg)]/50 border-0 rounded-xl px-4 py-3 placeholder:text-[var(--navy-primary)]/30 text-sm focus:ring-2 focus:ring-[var(--steel-blue)]/20 outline-none h-32" placeholder="Tell me a little about where you are right now..." />
                  </div>

                  {formStatus === 'error' && (
                    <div className="text-xs text-red-500 font-medium bg-red-50 p-3 rounded-lg flex items-center gap-2">
                      Something went wrong. Please try again!
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn-primary w-full justify-center py-4 bg-[var(--navy-deep)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Sending Presence...' : 'Send My Message'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
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
                { Icon: Linkedin, href: "https://www.linkedin.com/in/sharmila-ghulaumali-7a47173b0/" },
                { Icon: Mail, href: "mailto:sharmilalifecoach04@gmail.com" }
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
