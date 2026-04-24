import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Smartphone, 
  ChevronDown,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';

const APK_LINK = "https://github.com/sushyamal/gt-app/releases/download/v1.0/GT.Earn.apk";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
              <TrendingUp className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold text-slate-900 tracking-tight">GT EARN</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={APK_LINK}
              className="px-6 py-2.5 bg-brand-primary text-white rounded-full text-sm font-bold shadow-lg shadow-orange-500/20 hover:bg-brand-secondary transition-all"
            >
              Download APK
            </a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 py-6 px-4 shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-700 hover:text-brand-primary"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={APK_LINK}
                className="w-full py-4 bg-brand-primary text-white rounded-xl text-center font-bold shadow-lg"
              >
                Download Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 bg-white rounded-[2rem] border border-orange-100/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
  >
    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-brand-primary" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-orange-100 last:border-0 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-brand-primary transition-colors"
      >
        <span className="text-lg font-bold text-slate-800 pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <p className="pb-6 text-slate-500 text-sm leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
          <div className="absolute top-20 right-[-10%] w-96 h-96 bg-orange-200 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-[-5%] w-80 h-80 bg-orange-100 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-50 text-brand-primary text-xs font-bold uppercase tracking-widest mb-8 border border-orange-100"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified & Trusted Daily Earnings</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-display font-black text-slate-900 mb-6 leading-[1.2] tracking-normal"
              >
                Work Today, <br />
                <span className="text-gradient-orange">Earn Tomorrow</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-500 max-w-lg mb-10 leading-relaxed"
              >
                GT Earn is the simplest way to turn your free time into real cash. Complete micro-tasks like surveys, testing apps, and get paid within 24 hours.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <a
                  href={APK_LINK}
                  className="w-full sm:w-auto px-10 py-5 bg-brand-primary text-white rounded-2xl font-black text-xl flex items-center justify-center space-x-3 shadow-2xl shadow-orange-500/40 hover:bg-brand-secondary hover:scale-[1.02] active:scale-100 transition-all"
                >
                  <Download className="w-6 h-6" />
                  <span>Download APK</span>
                </a>
                <a
                  href="#process"
                  className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors"
                >
                  See How It Works
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex items-center space-x-6 text-slate-400"
              >
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-slate-900">50K+</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Active Users</span>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-slate-900">₹2M+</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Paid Out</span>
                </div>
              </motion.div>
            </div>

            <div className="relative hidden lg:flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative z-10 w-80 aspect-[9/19] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(249,115,22,0.3)] overflow-hidden"
              >
                {/* Mock Phone UI */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-3xl z-20" />
                <div className="p-6 h-full flex flex-col pt-12 space-y-6">
                  <div className="h-40 w-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-6 text-white shadow-xl">
                    <p className="text-[10px] font-bold uppercase opacity-80 mb-1">Current Balance</p>
                    <h3 className="text-3xl font-black">₹1,450.00</h3>
                    <div className="mt-6 w-full h-10 bg-white/20 rounded-xl" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-black text-white/50 uppercase tracking-widest">Available Tasks</p>
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center px-4 space-x-3">
                        <div className="w-10 h-10 bg-white/10 rounded-xl" />
                        <div className="flex-1 space-y-1">
                          <div className="h-2 w-2/3 bg-white/20 rounded" />
                          <div className="h-2 w-1/2 bg-white/10 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              {/* Floating accents */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-10 -right-4 w-20 h-20 bg-orange-400 rounded-2xl flex items-center justify-center shadow-xl z-20 rotate-12"
              >
                <TrendingUp className="text-white w-10 h-10" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4 tracking-tight uppercase">Platform Perks</h2>
          <p className="text-slate-500 mb-16 max-w-xl mx-auto">Everything you need to start earning from your smartphone today.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Zap}
              title="Quick Tasks"
              description="Complete simple surveys, digital signatures, and app trials in minutes."
            />
            <FeatureCard 
              icon={Clock}
              title="Instant Rewards"
              description="Track your earnings in real-time as soon as you submit a successful task."
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Secure Payouts"
              description="Withdraw your hard-earned money via UPI, Bank, or Amazon Pay securely."
            />
            <FeatureCard 
              icon={Smartphone}
              title="Easy Interface"
              description="A clean, distraction-free mobile experience designed for rapid tasking."
            />
            <FeatureCard 
              icon={Download}
              title="100% Free"
              description="No hidden deposits or joining fees. You stay focused only on earning."
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Unlimited Tasks"
              description="We refresh our task library daily, ensuring you never run out of opportunities."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="process" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-square bg-brand-primary rounded-[3rem] shadow-3xl shadow-orange-500/20 flex flex-col items-center justify-center p-12 text-center text-white"
              >
                <Smartphone className="w-24 h-24 mb-8" />
                <h3 className="text-4xl font-black mb-4">Start in 5 Minutes</h3>
                <p className="text-orange-100 text-lg font-medium leading-relaxed">Most users earn ₹500 within minutes of completing their first task after signing up.</p>
              </motion.div>
            </div>
            
            <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight uppercase">Simple 3-Step Process</h2>
              
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Download & Register', text: 'Install the APK and sign up with just your basic details.' },
                  { step: '02', title: 'Pick Your Tasks', text: 'Browse dozens of ongoing activities and choose what fits you best.' },
                  { step: '03', title: 'Get Paid Fast', text: 'Request withdrawal and receive your payment within 24 hours.' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-6 group"
                  >
                    <div className="text-5xl font-black text-orange-100 group-hover:text-brand-primary transition-colors">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-black text-slate-800 mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & FAQ */}
      <section id="faq" className="py-24 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 uppercase tracking-tight">Common Queries</h2>
            <p className="text-slate-500 mt-4">Everything you need to know before starting your journey.</p>
          </div>
          
          <div className="space-y-2">
            <FAQItem 
              question="Is GT Earn really free?"
              answer="Yes, it's 100% free to join and use. We never ask for any processing fees or deposits. Our platform facilitates connections between researchers and task earners."
            />
            <FAQItem 
              question="How much can I earn daily?"
              answer="Earnings depend on how many tasks you complete. Dedicated users frequently earn between ₹200 to ₹1500 per day by participating in high-value app tests and surveys."
            />
            <FAQItem 
              question="What are the payout methods?"
              answer="We currently support direct Bank Transfers, UPI (PhonePe, GPay, Paytm), and popular Digital Coupons. All payments are processed within 24 hours."
            />
            <FAQItem 
              question="Is my data secure?"
              answer="We prioritize your privacy above all else. We use industry-standard encryption for all data storage and transaction logs."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-primary relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 border-[40px] border-white rounded-full" />
          <div className="absolute bottom-[-20%] left-[-20%] w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-display font-black mb-8 leading-none uppercase tracking-tighter">Ready to Start Earning?</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-12 font-medium">Join 50k+ earners who are already turning their free time into real digital income with GT EARN.</p>
            
            <a
              href={APK_LINK}
              className="inline-flex items-center space-x-4 px-12 py-6 bg-white text-brand-primary rounded-[2rem] font-black text-2xl shadow-4xl hover:scale-105 active:scale-100 transition-all"
            >
              <Download className="w-8 h-8" />
              <span>Download GT Earn Now</span>
            </a>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-orange-200 text-xs font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Secure Payment</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Trusted Platform</span>
              <span className="flex items-center gap-2"><Smartphone className="w-4 h-4" /> No Ads</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-sm">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center shadow-lg">
                  <TrendingUp className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-display font-bold text-slate-900 tracking-tight">GT EARN</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Connect with the world's leading brands through simple micro-tasks. We ensure trust, transparency, and timely payments for every earner.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h5 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Resources</h5>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="#features" className="hover:text-brand-primary transition-colors">Features</a></li>
                  <li><a href="#process" className="hover:text-brand-primary transition-colors">Process</a></li>
                  <li><a href="#faq" className="hover:text-brand-primary transition-colors">Support</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center gap-6">
            <p>© {new Date().getFullYear()} GT EARN. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
