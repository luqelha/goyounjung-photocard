'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { awards } from '@/data/artist';

export function AwardsMarquee() {
  const duration = 40;

  return (
    <section className='bg-[#0A0A0A] py-10 md:py-14 overflow-hidden relative flex items-center'>
      <div className='absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none' />
      <div className='absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none' />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration,
        }}
        className='relative flex whitespace-nowrap items-center w-max transform-gpu'>
        {[...Array(2)].map((_, arrayIndex) => (
          <div key={`marquee-set-${arrayIndex}`} className='flex items-center'>
            {awards.map((award, index) => (
              <div key={`${award.ceremony}-${index}`} className='flex items-center group/item px-8 md:px-16'>
                <div className='flex items-center gap-4 md:gap-6'>
                  <span className='text-on-surface-variant/40 font-label tracking-[0.2em] text-[10px] md:text-xs font-semibold tabular-nums uppercase'>
                    {award.year}
                  </span>

                  <div className='relative h-5 md:h-7 w-24 md:w-32'>
                    {award.logoUrl ? (
                      <Image
                        src={award.logoUrl}
                        alt={award.ceremony}
                        fill
                        className='object-contain opacity-70 group-hover/item:opacity-100 transition-opacity duration-300'
                      />
                    ) : (
                      <span className='text-[#EAEAEA] font-headline tracking-widest text-sm md:text-base font-bold uppercase'>
                        {award.ceremony}
                      </span>
                    )}
                  </div>

                  <span className='text-on-surface-variant/20 mx-2'>|</span>

                  <span className='text-on-surface-variant/70 font-label tracking-[0.15em] text-[10px] md:text-xs font-medium uppercase group-hover/item:text-[#EAEAEA] transition-colors duration-300'>
                    {award.category}
                  </span>
                </div>

                <div className='flex items-center justify-center ml-16 md:ml-32'>
                  <div className='w-1.5 h-1.5 rounded-full bg-white/50 group-hover/item:bg-[#f7f7f7] transition-colors duration-300 shadow-[0_0_8px_rgba(175,148,79,0.2)]' />
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
