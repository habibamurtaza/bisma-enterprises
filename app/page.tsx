'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Building2, Paintbrush, Home, Phone, Mail, MapPin, Sun, Moon, ArrowRight, CheckCircle2, Sparkles, ArrowUpRight, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const COMPANY = {
  name: 'Bisma Enterprises',
  tagline: 'Construction • Interior • Estate',
  shortAbout: 'Interiors and construction across Karachi — DHA, Clifton, Gulshan. From first sketch to final handover.',
  director: 'Ghulam Murtaza',
  phone: '0300-9232419',
  email: 'bismaenterprises75@gmail.com',
  address: 'Office M1, Mezzanine Floor, Plot 39 C South Park Avenue, Near Crispo Bakery, Phase 2 Ext, DHA, Karachi'
};

// n8n-like motion variants
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };
const hoverLift = { whileHover: { y: -4 }, whileTap: { scale: 0.98 } };

// Curated (initial-look) images via Unsplash CDN (reliable + Karachi vibe)
const HERO_IMG = 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&auto=format&fit=crop&q=80';
const PROJECTS = [
  { id:'pearl-tower', title:'Pearl Tower Apartment — Warm Minimal', type:'Interior', city:'Karachi',
    cover:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=80',
    tags:['Apartment','Custom Woodwork','Lighting'] },
  { id:'dha-villa', title:'DHA Villa — Contemporary Grey', type:'Construction', city:'Karachi',
    cover:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&auto=format&fit=crop&q=80',
    tags:['Villa','Stone & Marble','Turnkey'] },
  { id:'clifton-office', title:'Clifton Office — Modern Workspace', type:'Interior', city:'Karachi',
    cover:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&auto=format&fit=crop&q=80',
    tags:['Office','Acoustics','Furniture'] },
  { id:'retail-fitout', title:'Retail Fit-Out — Flagship Store', type:'Construction', city:'Karachi',
    cover:'https://images.unsplash.com/photo-1604948501466-4e9b88a7c9a1?w=1600&auto=format&fit=crop&q=80',
    tags:['Retail','Branding','Lighting'] },
];

// Testimonials (Karachi tone)
const TESTIMONIALS = [
  { quote: 'They delivered exactly on the renders — on time and within budget. The team is disciplined and creative.', author: 'A. Khan', role: 'Homeowner, DHA' },
  { quote: 'Our office fit-out finished two weeks early. Superb workmanship and project management.', author: 'S. Ahmed', role: 'COO, Tech Startup' }
];

// WhatsApp brand SVG (inline)
const WhatsAppIcon = () => (
  <svg width='20' height='20' viewBox='0 0 32 32' fill='currentColor' aria-hidden='true'>
    <path d='M19.11 17.52a4.96 4.96 0 0 1-2.14-.54c-.33-.16-.72-.16-.94.16l-.68.9c-.2.26-.57.35-.87.2-1.64-.82-2.99-2.15-3.82-3.82-.16-.28-.1-.65.16-.85l.9-.68c.3-.22.38-.6.22-.93-.23-.69-.35-1.43-.35-2.17 0-.5-.4-.9-.9-.9H9.2c-.5 0-.9.4-.9.9 0 5.04 4.08 9.12 9.12 9.12.5 0 .9-.4.9-.9v-1.04c0-.5-.4-.9-.9-.9Z'/>
    <path d='M26.34 5.66A11.98 11.98 0 0 0 4.18 19.8L3 25l5.33-1.15A11.98 11.98 0 1 0 26.34 5.66Zm-4.1 18.58c-2.07 1.2-4.4 1.52-6.68.93a10.1 10.1 0 0 1-3.06-1.4l-3.16.69.67-3.08a10.1 10.1 0 0 1-1.43-3.13c-.6-2.28-.28-4.62.93-6.68a8.93 8.93 0 0 1 3.9-3.44c4.86-2.2 10.6-.09 12.81 4.77 2.2 4.86.1 10.6-4.78 12.82Z'/>
  </svg>
);

// Floating WhatsApp button with accent bg
const WhatsAppButton = () => (
  <a className='float-wa bg-accent w-14 h-14 grid place-items-center' style={{animation:'floaty 4s ease-in-out infinite'}}
     href={'https://wa.me/92' + COMPANY.phone.replace(/[^0-9]/g,'').slice(-10)}
     target='_blank' aria-label='WhatsApp Chat'>
    <WhatsAppIcon />
  </a>
);

export default function Page() {
  const [dark, setDark] = useState(true);
  const [accentGold, setAccentGold] = useState(false);
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(
    () => PROJECTS.filter(p => filter === 'All' ? true : p.type === filter),
    [filter]
  );

  // Sync html class for light/dark & accent
  useEffect(() => { document.documentElement.classList.toggle('light', !dark); }, [dark]);
  useEffect(() => { document.documentElement.classList.toggle('gold', accentGold); }, [accentGold]);

  return (
    <div className={dark ? 'min-h-screen bg-gray-950 text-white' : 'min-h-screen bg-white text-gray-900'}>
      <WhatsAppButton/>

      {/* Nav */}
      <header className='sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-black/30'>
        <div className='container py-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-9 h-9 rounded-xl badge-accent grid place-items-center font-bold'>BE</div>
            <div>
              <div className='font-semibold tracking-wide'>{COMPANY.name}</div>
              <div className='text-xs opacity-70 -mt-0.5'>{COMPANY.tagline}</div>
            </div>
          </div>
          <nav className='hidden md:flex gap-6 text-sm opacity-90'>
            {['services','projects','process','testimonials','contact'].map(id => (
              <a key={id} href={'#'+id} className='nav-link hover:opacity-100 capitalize'>{id}</a>
            ))}
          </nav>
          <div className='flex items-center gap-2'>
            <Button variant='secondary' onClick={()=>setAccentGold(a=>!a)}>
              {accentGold ? 'Accent: Gold' : 'Accent: Default'}
            </Button>
            <Button onClick={() => setDark(d => !d)} variant='secondary'>{dark ? <Sun className='w-4 h-4'/> : <Moon className='w-4 h-4'/>}</Button>
            <a href='#contact'><Button className='btn-primary'>Get Quote</Button></a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className='relative overflow-hidden hero-gradient'>
        <div className='container py-20 grid md:grid-cols-2 gap-10 items-center'>
          <motion.div variants={fadeUp} initial='hidden' whileInView='show' viewport={{ once: true }}>
            <h1 className='text-4xl md:text-6xl font-semibold leading-tight'>
              Spaces that <span className='text-accent'>work</span> as beautifully as they look.
            </h1>
            <p className='mt-5 text-lg opacity-85 max-w-xl'>{COMPANY.shortAbout}</p>
            <div className='mt-8 flex flex-wrap gap-3'>
              <a href='#projects'><Button className='btn-primary' size='lg'>View Projects <ArrowUpRight className='w-4 h-4 ml-2'/></Button></a>
              <a href='#contact'><Button size='lg' variant='secondary'>Free Consultation</Button></a>
              <a href={'https://wa.me/92' + COMPANY.phone.replace(/[^0-9]/g,'').slice(-10)} target='_blank'>
                <Button size='lg' variant='secondary'><WhatsAppIcon /><span className='ml-2'>WhatsApp</span></Button>
              </a>
            </div>
            <div className='mt-6 flex items-center gap-4 text-sm opacity-80'>
              <div className='flex items-center gap-2'><Phone className='w-4 h-4'/> {COMPANY.phone}</div>
              <div className='hidden md:flex items-center gap-2'><Mail className='w-4 h-4'/> {COMPANY.email}</div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} viewport={{ once: true }} transition={{duration:0.6, delay:0.1}} className='relative'>
            <Image alt='Hero building' width={1200} height={900} className='rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]' src={HERO_IMG} />
            <div className='absolute -bottom-4 -left-4 bg-white/10 backdrop-blur rounded-2xl px-4 py-3 flex items-center gap-2 text-sm'>
              <Sparkles className='w-4 h-4'/> ISO-grade finishes • Transparent BOQs • On-time delivery
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id='services' className='section'>
        <div className='flex items-end justify-between mb-8'>
          <h2 className='text-3xl md:text-4xl font-semibold'>Services</h2>
          <div className='text-sm opacity-70'>Concept to handover</div>
        </div>
        <motion.div className='grid md:grid-cols-3 gap-6' variants={stagger} initial='hidden' whileInView='show' viewport={{ once: true }}>
          {[{icon:Building2,title:'Construction',desc:'Residential & commercial builds, grey structure, MEP, and complete project management.'},
            {icon:Paintbrush,title:'Interior',desc:'Space planning, 3D visualization, custom joinery, lighting, and turnkey fit-outs.'},
            {icon:Home,title:'Estate',desc:'Property advisory, renovation, and value-add upgrades for investors and homeowners.'}]
            .map((s) => (
            <motion.div key={s.title} variants={fadeUp}>
              <Card><CardContent>
                <div className='w-12 h-12 rounded-2xl accent-chip grid place-items-center mb-4'>
                  <s.icon className='w-6 h-6'/>
                </div>
                <div className='text-xl font-semibold'>{s.title}</div>
                <p className='mt-2 opacity-80 leading-relaxed'>{s.desc}</p>
                <Button variant='ghost' className='mt-4 px-0'>Explore <ArrowRight className='w-4 h-4 ml-1'/></Button>
              </CardContent></Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects */}
      <section id='projects' className='section'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-3xl md:text-4xl font-semibold'>Featured Projects</h2>
          <div className='flex items-center gap-2 text-sm'>
            <Filter className='w-4 h-4'/><label className='sr-only' htmlFor='proj-filter'>Filter projects</label>
            <select id='proj-filter' className='bg-transparent border rounded-xl px-3 py-1.5' value={filter} onChange={(e) => setFilter(e.target.value)}>
              {['All','Interior','Construction'].map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
        </div>
        <div className='grid-sym'>
          {filtered.map((p) => (
            <motion.a key={p.id} href={'#project-' + p.id} {...hoverLift} className='group block'>
              <div className='overflow-hidden rounded-3xl border border-white/10'>
                <Image src={p.cover} alt={\\ — \ in \\} width={1200} height={900} className='w-full aspect-[4/3] object-cover group-hover:scale-105 transition' />
              </div>
              <div className='mt-3 flex items-center justify-between'>
                <div>
                  <div className='font-semibold'>{p.title}</div>
                  <div className='text-sm opacity-70'>{p.type} • {p.city}</div>
                </div>
                <ArrowUpRight className='w-4 h-4 opacity-70'/>
              </div>
              <div className='mt-1 text-xs opacity-60'>{p.tags.join(' • ')}</div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id='process' className='section'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-8'>How We Work</h2>
        <motion.div className='grid md:grid-cols-4 gap-6' variants={stagger} initial='hidden' whileInView='show' viewport={{ once: true }}>
          {['Discovery','Design','Build','Handover'].map((t,i)=> (
            <motion.div key={t} variants={fadeUp}>
              <div className='rounded-3xl border border-white/10 p-6'>
                <div className='flex items-center gap-2 text-accent'>
                  <CheckCircle2 className='w-5 h-5'/><div className='text-sm opacity-80'>Step {i+1}</div>
                </div>
                <div className='mt-2 font-semibold text-lg'>{t}</div>
                <p className='mt-2 opacity-80 leading-relaxed'>
                  {i===0 && 'We map your goals, budget, and timeline. Site visit + requirements brief.'}
                  {i===1 && 'Moodboards, 2D layout, 3D renders, and BOQs for sign-off.'}
                  {i===2 && 'Civil, MEP, and finishes. Weekly progress reports and transparent billing.'}
                  {i===3 && 'Snag-free delivery, documentation, and post-project support.'}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section id='testimonials' className='section'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-8'>What Clients Say</h2>
        <div className='grid md:grid-cols-2 gap-6'>
          {TESTIMONIALS.map((t, i) => (
            <Card key={i}><CardContent>
              <p className='text-lg leading-relaxed'>“{t.quote}”</p>
              <div className='mt-4 text-sm opacity-80'>{t.author} — {t.role}</div>
            </CardContent></Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id='contact' className='section'>
        <div className='grid md:grid-cols-2 gap-10 items-start'>
          <div>
            <h2 className='text-3xl md:text-4xl font-semibold'>Contact</h2>
            <p className='mt-3 opacity-80'>Tell us about your project. We usually reply within one business day.</p>
            <div className='mt-6 space-y-3 text-sm'>
              <div className='flex items-center gap-2'><Phone className='w-4 h-4'/> {COMPANY.phone}</div>
              <div className='flex items-center gap-2'><Mail className='w-4 h-4'/> {COMPANY.email}</div>
              <div className='flex items-center gap-2'><MapPin className='w-4 h-4'/> {COMPANY.address}</div>
            </div>
            <div className='mt-6 flex gap-3 opacity-80'>
              <a href={'https://wa.me/92' + COMPANY.phone.replace(/[^0-9]/g,'').slice(-10)} target='_blank' className='badge'>WhatsApp</a>
              <a href={'mailto:'+COMPANY.email} className='badge'>Email</a>
            </div>
          </div>

          <form className='rounded-3xl border border-white/10 p-6 grid gap-4'
                action='https://formsubmit.co/bismaenterprises75@gmail.com' method='POST'>
            <input type='hidden' name='_captcha' value='false'/>
            <input type='hidden' name='_subject' value='New inquiry from Bisma Enterprises website'/>
            <input type='hidden' name='_template' value='table'/>
            <div className='grid md:grid-cols-2 gap-4'>
              <Input name='name' placeholder='Your Name' required />
              <Input type='email' name='email' placeholder='Email' required />
            </div>
            <Input name='phone' placeholder='Phone / WhatsApp' />
            <Input name='location' placeholder='Project Location (e.g., DHA, Clifton)' />
            <Textarea name='brief' placeholder='Project brief (area, style, timeline, budget)' rows={5} />
            <Button type='submit' className='btn-primary'>Send Inquiry</Button>
            <div className='text-xs opacity-60'>This form emails directly to {COMPANY.email}. We never share your contact details.</div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-white/10'>
        <div className='container py-10 grid md:grid-cols-2 gap-6'>
          <div>
            <div className='font-semibold'>{COMPANY.name}</div>
            <div className='text-sm opacity-70'>{COMPANY.tagline}</div>
          </div>
          <div className='text-sm opacity-70 md:text-right'>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
