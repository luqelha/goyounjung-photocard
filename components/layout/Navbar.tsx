'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '#home', ids: ['home'] },
  { label: 'About', href: '#about', ids: ['about'] },
  { label: 'Highlights', href: '#highlights', ids: ['highlights'] },
  { label: 'Filmography', href: '#filmography', ids: ['filmography'] },
  { label: 'Gallery', href: '#gallery', ids: ['gallery', 'gallery-fashion'] },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');

      const scrollPosition = window.scrollY + 100;

      let currentSectionId = '';

      sections.forEach(section => {
        if (!section.id) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSectionId = section.id;
        }
      });

      if (window.scrollY === 0) {
        currentSectionId = 'home';
      }

      if (currentSectionId) {
        const activeLink = navLinks.find(link => link.ids.includes(currentSectionId));
        if (activeLink) {
          setActive(activeLink.label);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 md:px-10',
          scrolled ? 'bg-[#131313]/90 backdrop-blur-md' : 'bg-transparent',
        )}>
        <div className='max-w-7xl mx-auto w-full flex items-center justify-between h-16'>
          <Link
            href='/'
            className='text-[#e5e2e1] font-black text-sm tracking-[0.3em] uppercase font-headline hover:text-white transition-colors relative z-50'
            onClick={() => {
              setMenuOpen(false);
              setTimeout(() => window.scrollTo(0, 0), 0);
            }}>
            고윤정
          </Link>

          <ul className='hidden md:flex items-center gap-8'>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-xs tracking-[0.2em] uppercase font-label transition-all duration-300',
                    active === link.label ? 'text-white font-bold' : 'text-[#e5e2e1]/50 hover:text-white',
                  )}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className='md:hidden text-[#e5e2e1] hover:text-white transition-colors relative z-50'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          'fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden',
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none',
        )}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={cn(
          'fixed top-0 left-0 bottom-0 w-60 bg-black/85 z-50 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center',
          menuOpen ? 'translate-x-0' : '-translate-x-full',
        )}>
        <div className='absolute top-0 left-0 right-0 h-16 flex items-center px-8'>
          <span className='text-[#e5e2e1] font-black text-sm tracking-[0.3em] uppercase font-headline hover:text-white transition-colors relative'>
            고윤정
          </span>
        </div>

        <ul className='flex flex-col px-8 gap-8'>
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'text-sm tracking-[0.2em] uppercase font-label transition-colors block',
                  active === link.label ? 'text-white font-bold' : 'text-white/40 hover:text-white',
                )}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
