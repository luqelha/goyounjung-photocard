'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { artistData } from '@/data/artist';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function AboutSection() {
  return (
    <section id='about' className='bg-[#131313] pt-10 pb-20 px-6 md:px-10 relative overflow-hidden -mt-px z-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center gap-4 mb-10 md:mb-16 justify-center md:justify-start'>
          <div className='w-[3.2px] h-8 bg-[#AF944F]' />
          <p className='text-[10px] tracking-[0.35em] uppercase text-on-surface-variant/60 font-label'>The Artist</p>
        </div>
        <div className='grid md:grid-cols-2 gap-12 md:gap-24 items-center'>
          <div className='order-2 md:order-1'>
            <motion.h2
              custom={0.1}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className='relative text-center md:text-left text-2xl md:text-3xl lg:text-5xl font-black text-[#EAEAEA] mb-8 leading-[1.1] font-headline tracking-tight'>
              GO YOUN-JUNG | 고윤정
            </motion.h2>

            <motion.div
              custom={0.2}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className='relative space-y-6 font-body'>
              {artistData.fullBio.split('\n\n').map((para, i) => (
                <p key={i} className='text-on-surface-variant/60 text-sm md:text-base leading-relaxed text-justify'>
                  {para}
                </p>
              ))}
            </motion.div>

            <motion.div
              custom={0.3}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className='relative grid grid-cols-3 mt-10 py-8 border-y border-white/5 text-center'>
              {[
                { label: 'Active Since', value: '2019' },
                { label: 'Major Roles', value: '8+' },
                { label: 'Awards', value: '5' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col group cursor-default ${
                    index !== 0 ? 'pl-4 md:pl-8 border-l border-white/5' : 'pr-4 md:pr-8'
                  }`}>
                  <p className='text-3xl md:text-4xl font-black text-[#EAEAEA]/90 font-headline mb-2 tracking-tight group-hover:text-white transition-colors duration-500'>
                    {stat.value}
                  </p>

                  <div className='flex items-center justify-center gap-2.5 '>
                    <div className='w-2 h-px bg-[#AF944F]/40 group-hover:bg-[#AF944F] group-hover:w-4 transition-all duration-500' />
                    <p className='text-[9px] tracking-[0.25em] uppercase text-on-surface-variant/40 font-label group-hover:text-on-surface-variant/60 transition-colors duration-500'>
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              custom={0.4}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className='relative pt-10'>
              <p className='text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/40 mb-6 font-label'>
                Brand Ambassadorships
              </p>
              <div className='flex flex-wrap items-center justify-center gap-10 md:gap-6'>
                {[
                  {
                    name: 'Boucheron',
                    src: 'https://cdn.brandfetch.io/idgBYqCdx-/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1776680372982',
                  },
                  {
                    name: 'Chanel',
                    src: 'https://cdn.brandfetch.io/idBUm3gJdJ/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741582517807',
                  },
                  {
                    name: 'Didier Dubot',
                    src: 'https://cdn.brandfetch.io/idwYv99Wr3/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1757420961340',
                  },
                  {
                    name: 'Discovery Expedition',
                    src: '/logos/discovery-expedition-logo.webp',
                  },
                  {
                    name: 'Marithé Girbaud',
                    src: '/logos/Marithé-Girbaud.webp',
                  },
                  { name: 'NH Bank', src: '/logos/nh-bank.webp' },
                  { name: 'Ryo Hair', src: '/logos/ryo-care.webp' },
                  {
                    name: 'Vodana',
                    src: '/logos/vodana.webp',
                  },
                ].map(brand => (
                  <div
                    key={brand.name}
                    className='relative h-13 w-16 md:w-24 opacity-50 brightness-0 invert hover:opacity-100 transition-all duration-500 cursor-pointer'>
                    <Image
                      src={brand.src}
                      alt={`${brand.name} Logo`}
                      fill
                      sizes='(max-width: 768px) 64px, 96px'
                      className='object-contain object-left md:object-center'
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            custom={0.3}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className='relative w-full max-w-md mx-auto order-1 md:order-2 rounded-2xl'>
            <div className='relative aspect-3/4 w-full overflow-hidden group' style={{ borderRadius: '2px' }}>
              <Image
                src='/images/the-profile.webp'
                alt='Go Youn-jung Portrait'
                fill
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'
                className='object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-500 rounded-3xl'
              />

              <div className='absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 pointer-events-none' />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
