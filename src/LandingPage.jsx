// LandingPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, CheckCircle, ChevronDown, Brain, Eye, Sliders, FileText, BarChart2, Palette, Star, ArrowRight, Menu, X } from 'lucide-react';

const PAYPAL_PLAN_ID = 'P-9LL76996SP682060VNIBXKDA';
const PAYPAL_CLIENT_ID = 'AWOt9K9UY_OeS31zNdvQC9p6DvP-3ZLZRWTuvwYw-NgbAdwk4Ez_VN0UclsExM2wOOnDBq_nV8mGUWxD';

// ─── PayPal Button ────────────────────────────────────────────────────────────
function PayPalButton({ onSuccess }) {
  const containerRef = useRef(null);
  const rendered = useRef(false);

  useEffect(() => {
    if (rendered.current) return;
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&vault=true&intent=subscription`;
    script.setAttribute('data-sdk-integration-source', 'button-factory');
    script.async = true;
    script.onload = () => {
      if (!containerRef.current) return;
      window.paypal.Buttons({
        style: { shape: 'rect', color: 'blue', layout: 'vertical', label: 'subscribe' },
        createSubscription: (data, actions) => actions.subscription.create({ plan_id: PAYPAL_PLAN_ID }),
        onApprove: (data) => onSuccess(data.subscriptionID),
        onError: (err) => { console.error('PayPal error', err); alert('Payment failed. Please try again.'); }
      }).render(containerRef.current);
      rendered.current = true;
    };
    document.body.appendChild(script);
    return () => { if (script.parentNode) script.parentNode.removeChild(script); };
  }, [onSuccess]);

  return <div ref={containerRef} style={{ marginTop: '1rem' }} />;
}

// ─── Main Landing Page ────────────────────────────────────────────────────────
export default function LandingPage({ onPaymentSuccess, onLoginClick, onTrialStart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const features = [
    { icon: <Brain size={28} color="#667eea" />, title: 'Reduce Cognitive Overload', desc: 'Word-by-word display eliminates visual noise, helping learners with attention difficulties process text without overwhelm.' },
    { icon: <Eye size={28} color="#667eea" />, title: 'Three Focus Modes', desc: 'Choose between Single Word, Context View, or Full Sentence mode depending on the learner\'s current ability and confidence level.' },
    { icon: <Sliders size={28} color="#667eea" />, title: 'Adjustable Reading Speed', desc: 'Fine-tune words per minute to match each learner\'s pace. Slower speeds build confidence; faster speeds challenge progress.' },
    { icon: <FileText size={28} color="#667eea" />, title: 'Unlimited Custom Texts', desc: 'Upload any reading material — school passages, homework, books. Import and export entire libraries with one click.' },
    { icon: <BarChart2 size={28} color="#667eea" />, title: 'Progress Tracking', desc: 'Monitor words read, sessions completed, and reading streaks to keep learners motivated and parents informed.' },
    { icon: <Palette size={28} color="#667eea" />, title: 'Personalised Themes', desc: 'Customise background, text, and highlight colours. Some learners respond better to specific colour combinations.' },
  ];

  const testimonials = [
    { name: 'Mrs. Sarah van der Merwe', role: 'Grade 4 Teacher, Cape Town', text: 'Focus Reader has transformed how my ADHD learners engage with reading tasks. The word-by-word display keeps them on track without constant redirecting.' },
    { name: 'David Nkosi', role: 'Parent of a child with ADHD', text: 'My son went from dreading reading homework to actually asking to use Focus Reader. The difference in his confidence has been remarkable.' },
    { name: 'Dr. Leanne Fourie', role: 'Educational Psychologist', text: 'I recommend Focus Reader to parents and teachers regularly. It addresses the core visual processing challenges many ADHD learners face.' },
  ];

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: '#1a1a2e', background: '#f9f8f6', minHeight: '100vh' }}>

      {/* ── Navigation ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent', boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : 'none', transition: 'all 0.3s', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <BookOpen size={28} color="#667eea" />
          <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#1a1a2e', letterSpacing: '-0.5px' }}>Focus Reader</span>
        </div>
        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {[['About', 'about'], ['Features', 'features'], ['Pricing', 'pricing'], ['Testimonials', 'testimonials']].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.95rem', color: '#444', fontFamily: 'inherit', letterSpacing: '0.3px' }}>{label}</button>
          ))}
          <button onClick={onLoginClick} style={{ padding: '0.6rem 1.4rem', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.95rem', fontFamily: 'inherit', fontWeight: 'bold', letterSpacing: '0.3px' }}>
            Log In
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ minHeight: '100vh', background: 'linear-gradient(150deg, #1a1a2e 0%, #2d2b55 50%, #667eea 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '8rem 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(102,126,234,0.1)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(118,75,162,0.15)', filter: 'blur(80px)' }} />

        <div style={{ maxWidth: '780px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', background: 'rgba(102,126,234,0.2)', border: '1px solid rgba(102,126,234,0.4)', borderRadius: '20px', padding: '0.4rem 1.2rem', marginBottom: '2rem', fontSize: '0.85rem', color: '#a8b4f8', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Evidence-Based Reading Support
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 'bold', color: 'white', lineHeight: 1.15, margin: '0 0 1.5rem', letterSpacing: '-1px' }}>
            Helping Learners with ADHD<br />
            <span style={{ background: 'linear-gradient(90deg, #a8b4f8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Read with Confidence
            </span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, margin: '0 0 3rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            A structured, distraction-free reading tool designed for teachers and parents supporting learners with attention difficulties. Simple to use. Immediately effective.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* ── FREE TRIAL CTA (primary) ── */}
            <button onClick={onTrialStart} style={{ padding: '1rem 2.5rem', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1.05rem', fontFamily: 'inherit', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 8px 30px rgba(102,126,234,0.4)' }}>
              Try Free for 14 Days <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollTo('features')} style={{ padding: '1rem 2.5rem', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', cursor: 'pointer', fontSize: '1.05rem', fontFamily: 'inherit' }}>
              See How It Works
            </button>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginTop: '1rem', fontFamily: 'sans-serif' }}>
            No credit card required · Cancel any time
          </p>
          <button onClick={() => scrollTo('about')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', marginTop: '4rem', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '0.3rem', margin: '4rem auto 0', fontSize: '0.85rem', fontFamily: 'inherit' }}>
            <span>Learn more</span>
            <ChevronDown size={20} style={{ animation: 'bounce 2s infinite' }} />
          </button>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" style={{ padding: '6rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#667eea', marginBottom: '1rem', fontFamily: 'sans-serif' }}>About Focus Reader</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', lineHeight: 1.2, margin: '0 0 1.5rem', letterSpacing: '-0.5px' }}>
              Built Around How ADHD Learners Actually Read
            </h2>
            <p style={{ color: '#555', lineHeight: 1.9, marginBottom: '1rem', fontSize: '1.05rem' }}>
              Learners with ADHD often struggle not because they can't read — but because a full page of text is visually overwhelming. Their eyes jump, they lose their place, and frustration builds quickly.
            </p>
            <p style={{ color: '#555', lineHeight: 1.9, fontSize: '1.05rem' }}>
              Focus Reader eliminates that problem by presenting text one word or sentence at a time, in a distraction-free environment. Teachers and parents report immediate improvements in engagement and reading confidence.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              { number: '3', label: 'Focus Modes' },
              { number: '$12', label: 'Per Month' },
              { number: '∞', label: 'Reading Texts' },
              { number: '100%', label: 'Browser Based' },
            ].map(({ number, label }) => (
              <div key={label} style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', boxShadow: '0 2px 20px rgba(0,0,0,0.06)', border: '1px solid #eee' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea', marginBottom: '0.3rem' }}>{number}</div>
                <div style={{ fontSize: '0.85rem', color: '#888', fontFamily: 'sans-serif' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#667eea', marginBottom: '1rem', fontFamily: 'sans-serif' }}>Features</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', letterSpacing: '-0.5px', margin: 0 }}>Everything a Teacher or Parent Needs</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {features.map(({ icon, title, desc }) => (
              <div key={title} style={{ padding: '2rem', borderRadius: '12px', border: '1px solid #eee', background: '#fafafa', transition: 'box-shadow 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 30px rgba(102,126,234,0.12)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
                <div style={{ marginBottom: '1rem' }}>{icon}</div>
                <h3 style={{ margin: '0 0 0.75rem', fontSize: '1.1rem', letterSpacing: '-0.3px' }}>{title}</h3>
                <p style={{ margin: 0, color: '#666', lineHeight: 1.7, fontSize: '0.95rem', fontFamily: 'sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" style={{ padding: '6rem 2rem', background: '#f9f8f6' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#667eea', marginBottom: '1rem', fontFamily: 'sans-serif' }}>Testimonials</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', letterSpacing: '-0.5px', margin: 0 }}>What Teachers & Parents Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {testimonials.map(({ name, role, text }) => (
              <div key={name} style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 20px rgba(0,0,0,0.06)', border: '1px solid #eee' }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} color="#667eea" fill="#667eea" />)}
                </div>
                <p style={{ color: '#444', lineHeight: 1.8, fontStyle: 'italic', margin: '0 0 1.5rem', fontSize: '0.95rem' }}>"{text}"</p>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{name}</div>
                  <div style={{ color: '#888', fontSize: '0.85rem', fontFamily: 'sans-serif' }}>{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" style={{ padding: '6rem 2rem', background: 'linear-gradient(150deg, #1a1a2e 0%, #2d2b55 60%, #667eea 100%)' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#a8b4f8', marginBottom: '1rem', fontFamily: 'sans-serif' }}>Pricing</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: 'white', letterSpacing: '-0.5px', margin: '0 0 1rem' }}>Simple, Transparent Pricing</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '3rem', lineHeight: 1.7, fontFamily: 'sans-serif' }}>One plan. Full access. Cancel any time.</p>

          <div style={{ background: 'white', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1a1a2e' }}>$12</span>
              <span style={{ color: '#888', fontFamily: 'sans-serif' }}> / month</span>
            </div>
            <p style={{ color: '#666', marginBottom: '1.5rem', fontFamily: 'sans-serif', fontSize: '0.95rem' }}>Per account — use with multiple learners</p>

            <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
              {[
                'Full access to all three focus modes',
                'Unlimited reading texts',
                'Adjustable reading speed',
                'Import & export your text library',
                'Personalised colour themes',
                'Progress tracking & session stats',
                'Cancel any time — no lock-in',
              ].map((feature) => (
                <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.7rem' }}>
                  <CheckCircle size={18} color="#667eea" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#333', fontFamily: 'sans-serif', fontSize: '0.95rem' }}>{feature}</span>
                </div>
              ))}
            </div>

            {/* ── FREE TRIAL button ── */}
            <button onClick={onTrialStart} style={{ width: '100%', padding: '1rem', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1.05rem', fontFamily: 'inherit', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: '0 4px 20px rgba(102,126,234,0.35)', marginBottom: '0.75rem' }}>
              Start Free 14-Day Trial <ArrowRight size={18} />
            </button>
            <p style={{ color: '#aaa', fontSize: '0.8rem', margin: '0 0 1.5rem', fontFamily: 'sans-serif' }}>
              No credit card required. Full access for 14 days.
            </p>

            {/* ── Divider ── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ flex: 1, height: '1px', background: '#eee' }} />
              <span style={{ color: '#aaa', fontSize: '0.8rem', fontFamily: 'sans-serif', whiteSpace: 'nowrap' }}>or subscribe now</span>
              <div style={{ flex: 1, height: '1px', background: '#eee' }} />
            </div>

            {/* ── PayPal (for direct subscribers) ── */}
            <PayPalButton onSuccess={onPaymentSuccess} />

            <p style={{ color: '#aaa', fontSize: '0.8rem', marginTop: '1rem', fontFamily: 'sans-serif' }}>
              After payment you will be prompted to create your account. Secure payment via PayPal.
            </p>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>Already have an account? </span>
            <button onClick={onLoginClick} style={{ background: 'none', border: 'none', color: '#a8b4f8', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem', fontFamily: 'inherit' }}>
              Log in here →
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#1a1a2e', padding: '2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <BookOpen size={20} color="#667eea" />
          <span style={{ color: 'white', fontWeight: 'bold' }}>Focus Reader</span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', margin: 0, fontFamily: 'sans-serif' }}>
          © {new Date().getFullYear()} Focus Reader · toptutoring.co.za · All rights reserved
        </p>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </div>
  );
}
