'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Star, Play, MonitorPlay } from 'lucide-react';
import { filmography, FilmographyItem } from '@/data/artist';
import { cn } from '@/lib/utils';

const PlatformLogo = ({ platformId }: { platformId: string }) => {
  const logos: Record<string, string> = {
    netflix: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    disney: 'https://cdn.brandfetch.io/idhQlYRiX2/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    tvn: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Logo_tvN.svg/500px-Logo_tvN.svg.png',
    jtbc: '/logos/jtbc.webp',
    iqiyi: 'https://cdn.brandfetch.io/idC_XIHUzu/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    tving: 'https://cdn.brandfetch.io/idlYsARcCg/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
  };

  const logoUrl = logos[platformId];

  if (logoUrl) {
    return (
      <div className='relative h-4 w-12 md:h-5 md:w-16'>
        <Image src={logoUrl} alt={platformId} fill className='object-contain object-left' unoptimized />
      </div>
    );
  }

  return (
    <MonitorPlay className='w-4 h-4 text-on-surface-variant/60 group-hover:text-[#e5e2e1] transition-colors duration-300' />
  );
};

const TimelineItem = ({ film, i, scrollYProgress }: { film: FilmographyItem; i: number; scrollYProgress: MotionValue<number> }) => {
  const isEven = i % 2 === 0;
  const total = filmography.length;
  const dotAt = i / total;
  const activateStart = dotAt - 0.005;
  const activateEnd = dotAt + 0.03;
  const dotScale = useTransform(scrollYProgress, [activateStart, activateEnd], [0.7, 1.4]);
  const dotOpacity = useTransform(scrollYProgress, [activateStart, activateEnd], [0.3, 1]);
  const dotBg = useTransform(scrollYProgress, [activateStart, activateEnd], ['#131313', '#e5e2e1']);
  const dotBorder = useTransform(scrollYProgress, [activateStart, activateEnd], ['#474747', '#e5e2e1']);
  const dotGlow = useTransform(
    scrollYProgress,
    [activateStart, activateEnd],
    ['0 0 0px rgba(229,226,225,0)', '0 0 18px rgba(229,226,225,0.55)'],
  );

  const cardOpacity = useTransform(scrollYProgress, [activateEnd, activateEnd + 0.04], [0.75, 1]);
  const cardY = useTransform(scrollYProgress, [activateEnd, activateEnd + 0.05], [16, 0]);

  const getRatingColor = (rating: string) => {
    if (rating === 'TBA') return 'text-on-surface-variant/40';
    const num = parseFloat(rating);
    if (num >= 8.5) return 'text-[#F5C518]';
    if (num >= 7.5) return 'text-[#e5e2e1]';
    return 'text-on-surface-variant/70';
  };

  const getAgeRatingColor = (ageRating: string) => {
    if (ageRating.includes('18') || ageRating.includes('19'))
      return 'bg-[#E50914]/20 text-[#E50914] border-[#E50914]/40';
    if (ageRating.includes('15')) return 'bg-[#F5C518]/20 text-[#F5C518] border-[#F5C518]/40';
    return 'bg-on-surface-variant/10 text-on-surface-variant/60 border-on-surface-variant/20';
  };

  return (
    <div
      className={cn(
        'relative flex flex-col md:flex-row items-center gap-8 md:gap-16 group',
        isEven ? 'md:flex-row-reverse' : '',
      )}>
      <motion.div
        style={{
          scale: dotScale,
          opacity: dotOpacity,
          backgroundColor: dotBg,
          borderColor: dotBorder,
          boxShadow: dotGlow,
        }}
        className='absolute left-5.75 md:left-1/2 w-3 h-3 z-10 rounded-full border-2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2'
      />

      <motion.div
        style={{ opacity: cardOpacity, y: cardY }}
        className={cn(
          'relative w-full md:w-1/2 pl-16 md:pl-0 flex flex-col',
          isEven ? 'md:text-left md:items-start' : 'md:text-right md:items-end',
        )}>
        <div className='flex items-center gap-4 mb-3'>
          <span className='text-on-surface-variant/50 text-sm tabular-nums font-label tracking-widest'>
            {film.year}
          </span>
          <span className='w-1 h-1 rounded-full bg-on-surface-variant/30' />
          <PlatformLogo platformId={film.platformId} />
        </div>

        <div className={cn('flex flex-col mb-4', isEven ? 'items-start' : 'md:items-end')}>
          <h3 className='text-3xl md:text-[2.8rem] uppercase font-light text-[#e5e2e1] mb-2 transition-colors duration-300 group-hover:text-white'>
            {film.title}
          </h3>
          <div className='flex items-center gap-1.5'>
            <Star
              className={cn(
                'w-3.5 h-3.5',
                film.rating === 'TBA'
                  ? 'text-on-surface-variant/30 fill-on-surface-variant/10'
                  : 'text-[#F5C518] fill-[#F5C518]',
              )}
            />
            <span className={cn('text-xs font-label tracking-widest font-bold', getRatingColor(film.rating))}>
              {film.rating} <span className='text-on-surface-variant/40 font-normal text-[12px]'>/ 10</span>
            </span>

            {film.ageRating && (
              <span
                className={cn(
                  'w-6 h-6 flex items-center justify-center text-[8px] md:text-[9px] font-bold font-label rounded-full border shrink-0',
                  getAgeRatingColor(film.ageRating),
                )}>
                {film.ageRating}
              </span>
            )}
          </div>
        </div>

        <p className='text-xs tracking-[0.07em] uppercase text-on-surface-variant/60 font-label mb-4'>
          {film.character} <span className='text-on-surface-variant/30'>|</span> {film.role}
        </p>

        <p
          className={cn(
            'text-on-surface-variant/70 text-justify text-sm leading-relaxed font-body max-w-sm mb-6',
            isEven ? 'md:text-left' : 'md:text-right',
          )}>
          {film.description}
        </p>

        {film.watchUrl !== '#' ? (
          <Link
            href={film.watchUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center gap-2 px-5 h-10 bg-[#1a1c1c] text-[#e5e2e1] border border-on-surface-variant/20 rounded-full text-[10px] uppercase tracking-[0.2em] font-label font-bold hover:bg-[#e5e2e1] hover:text-[#131313] transition-all duration-300 w-full sm:w-auto'>
            <Play className='w-3.5 h-3.5 fill-current' />
            Watch Now
          </Link>
        ) : (
          <span className='inline-flex items-center justify-center gap-2 px-5 h-10 bg-surface-container border border-[#474747]/40 text-on-surface-variant/40 rounded-full text-[10px] uppercase tracking-[0.2em] font-label cursor-not-allowed w-full sm:w-auto'>
            Not Available
          </span>
        )}
      </motion.div>

      <motion.div
        style={{ opacity: cardOpacity, y: cardY }}
        className='relative w-full md:w-1/2 pl-16 md:pl-0 mt-6 md:mt-0'>
        <div className='relative w-full aspect-video md:aspect-4/3 rounded-xl overflow-hidden bg-surface-container'>
          {film.image ? (
            <Image
              src={film.image}
              alt={film.title}
              fill
              unoptimized
              className='object-cover object-center transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100'
            />
          ) : (
            <div className='absolute inset-0 flex items-center justify-center text-on-surface-variant/20 text-xs font-label uppercase tracking-widest'>
              Image Pending
            </div>
          )}
          <div className='absolute inset-0 bg-linear-to-t from-[#131313]/60 via-transparent to-transparent' />
        </div>
      </motion.div>
    </div>
  );
};

export function FilmographySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <section
      id='filmography'
      className='bg-surface-container-lowest pt-0 pb-24 px-6 md:px-10 relative overflow-hidden'
      ref={containerRef}
      style={{ position: 'relative' }}>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center gap-4 mb-16 justify-center md:justify-start'>
          <div className='w-[3.2px] h-8 bg-[#E50914]/50' />
          <p className='text-[10px] tracking-[0.35em] uppercase text-on-surface-variant/60 font-label'>The Journey</p>
        </div>

        <div className='relative'>
          <div className='absolute top-0 bottom-0 left-5.75 md:left-1/2 w-px bg-[#474747]/35 md:-translate-x-1/2' />

          <motion.div
            className='absolute top-0 left-5.75 md:left-1/2 md:-translate-x-1/2 w-px origin-top'
            style={{ height: lineHeight }}>
            <div className='w-full h-full bg-[#e5e2e1]' />

            <motion.div
              className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-6 rounded-full'
              style={{
                opacity: glowOpacity,
                background:
                  'radial-gradient(ellipse at center, rgba(229,226,225,0.9) 0%, rgba(229,226,225,0.4) 40%, transparent 80%)',
                filter: 'blur(2px)',
              }}
            />
          </motion.div>

          <div className='flex flex-col gap-16 md:gap-24'>
            {filmography.map((film: FilmographyItem, i: number) => (
              <TimelineItem key={`${film.title}-${i}`} film={film} i={i} scrollYProgress={smoothProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
