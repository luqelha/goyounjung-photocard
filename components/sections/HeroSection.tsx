'use client';

import { artistData } from '@/data/artist';

export function HeroSection() {
  return (
    <section
      id='home'
      className='relative min-h-screen flex flex-col justify-end bg-[#131313] overflow-hidden px-6 md:px-10'>
      <div className='absolute inset-0'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute inset-0 w-full h-full object-cover object-top opacity-100 z-0'>
          <source src='/videos/hero-video.mp4' type='video/mp4' />
        </video>

        <div className='absolute inset-0 bg-linear-to-t from-[#131313] from-5% via-[#131313]/50 to-[#131313]/20 z-10' />
        <div className='absolute inset-0 bg-linear-to-t from-[#131313]/80 via-transparent to-transparent z-10' />
      </div>

      <div className='relative z-20 pb-14 md:pb-20 max-w-7xl mx-auto w-full'>
        <div className='max-w-2xl'>
          <p className='text-[#e5e2e1]/90 text-xs tracking-[0.4em] uppercase font-label mb-4'>
            고윤정 · Korean Actress
          </p>

          <h1
            className='text-[12vw] md:text-8xl font-black text-[#e5e2e1] leading-[0.88] mb-5 font-headline'
            style={{ letterSpacing: '-0.02em' }}>
            GO
            <br />
            YOUNJUNG
          </h1>

          <p className='text-on-surface-variant/70 text-sm md:text-base leading-relaxed mb-1 max-w-sm font-body'>
            {artistData.tagline}{' '}
            <em className='text-[#e5e2e1]/90 not-italic font-medium'>From the ethereal depths of Alchemy of Souls</em>{' '}
            to the visceral intensity of <em className='text-[#e5e2e1]/90 not-italic font-medium'>Moving</em>.
          </p>

          <div className='flex items-center gap-5 mt-8'>
            <button
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className='bg-[#e5e2e1] text-[#1a1c1c] text-xs font-bold tracking-[0.15em] uppercase px-7 h-11 hover:bg-white transition-colors font-label cursor-pointer'>
              View Works
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className='text-on-surface-variant/60 text-xs tracking-[0.15em] uppercase hover:text-[#e5e2e1] transition-colors font-label cursor-pointer'>
              Biography
            </button>
          </div>

          <p className='mt-6 text-[10px] tracking-[0.15em] uppercase text-on-surface-variant/20 font-label'>
            ▶ Preview: Go Youn-jung Interview · ESQUIRE Korea
          </p>
        </div>
      </div>
    </section>
  );
}
