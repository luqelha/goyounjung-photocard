'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { galleryImages, GalleryItem } from '@/data/artist';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay || 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};



function GalleryCard({
  item,
  className = '',
  delay = 0,
  aspectClass = 'aspect-[3/4]',
}: {
  item: GalleryItem;
  className?: string;
  delay?: number;
  aspectClass?: string;
}) {
  return (
    <motion.div
      custom={delay}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUpVariants}
      className={`relative group overflow-hidden cursor-pointer bg-[#1a1a1a] flex flex-col ${className}`}
      style={{ borderRadius: '10px' }}>
      <div className='absolute top-4 left-4 z-20'>
        <span
          className='text-[9px] tracking-[0.25em] uppercase font-bold px-2.5 py-1.5 rounded-sm'
          style={{
            background: 'rgba(10,10,10,0.7)',
            color: '#AF944F',
            backdropFilter: 'blur(8px)',
            letterSpacing: '0.2em',
            borderRadius: '20px',
          }}>
          {item.category}
        </span>
      </div>

      <div className={`${aspectClass} relative w-full overflow-hidden grow flex`}>
        <Image
          src={item.image}
          alt={item.caption}
          fill
          unoptimized
          className='object-cover grayscale-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1200 ease-out'
          style={{ objectPosition: 'center top' }}
        />
      </div>

      <div
        className='absolute inset-0 transition-opacity duration-700 pointer-events-none'
        style={{
          background: 'linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.3) 40%, transparent 70%)',
          opacity: 0.7,
        }}
      />
      <div
        className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
        style={{
          background: 'linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0.5) 50%, transparent 80%)',
        }}
      />

      <div className='absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10'>
        <p
          className='text-[#AF944F] mb-1.5 font-bold'
          style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
          {item.year}
        </p>
        <h3
          className='text-[#e5e2e1] font-light leading-tight mb-0 group-hover:mb-2 transition-all duration-500'
          style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}>
          {item.caption}
        </h3>
        <p
          className='text-[#a09d9a] text-xs leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-out'
          style={{ fontSize: '11px', lineHeight: '1.6' }}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function EditorialGallery() {
  const items = galleryImages as GalleryItem[];

  return (
    <section id='gallery' className='bg-surface-container-lowest py-16 relative overflow-hidden'>
      <div
        className='absolute top-0 left-0 select-none pointer-events-none block'
        style={{
          fontSize: 'clamp(8rem, 18vw, 18rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(175,148,79,0.07)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          userSelect: 'none',
          transform: 'translateY(-10%)',
        }}>
        Muse
      </div>

      <div className='max-w-350 mx-auto px-6 md:px-12 relative z-10'>
        <div className='flex flex-col md:flex-row items-center md:items-end justify-between mb-16 md:mb-24'>
          <div>
            <motion.h2
              custom={0.1}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className='relative text-[#e5e2e1] font-light tracking-wide'
              style={{
                fontSize: 'clamp(3rem, 7vw, 5rem)',
                lineHeight: 0.95,
              }}>
              THE <span style={{ color: '#AF944F' }}>MUSE</span>
            </motion.h2>
          </div>

          <motion.div
            custom={0.2}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className='relative mt-8 md:mt-0 md:max-w-65'>
            <p
              className='text-[#5a5755] text-right leading-relaxed hidden md:block'
              style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', lineHeight: '1.8' }}>
              High-fashion campaigns,
              <br />
              luxury brand ambassadorial
              <br />
              partnerships &amp; editorials.
            </p>
          </motion.div>
        </div>

        <div className='hidden md:flex flex-col gap-1.5'>
          <div className='flex gap-1.5'>
            <div className='flex flex-col gap-1.5 w-2/3'>
              <GalleryCard item={items[0]} aspectClass='aspect-[16/10]' delay={0.1} />
              <div className='grid grid-cols-2 gap-1.5'>
                <GalleryCard item={items[2]} aspectClass='aspect-[4/5]' delay={0.2} />
                <GalleryCard item={items[3]} aspectClass='aspect-[4/5]' delay={0.25} />
              </div>
            </div>

            <div className='w-1/3 flex'>
              <GalleryCard item={items[1]} aspectClass='' className='w-full grow' delay={0.15} />
            </div>
          </div>

          <div className='flex gap-1.5 aspect-21/9'>
            <div className='w-1/3 flex'>
              <GalleryCard item={items[4]} aspectClass='' className='w-full grow' delay={0.05} />
            </div>
            <div className='w-2/3 flex'>
              <GalleryCard item={items[5]} aspectClass='' className='w-full grow' delay={0.1} />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-1.5'>
            {items
              .slice(6, 9)
              .map(
                (item, i) =>
                  item && <GalleryCard key={item.id} item={item} aspectClass='aspect-[20/21]' delay={0.05 * i} />,
              )}
          </div>
        </div>

        <div className='md:hidden flex flex-col gap-1.25'>
          <GalleryCard item={items[0]} aspectClass='aspect-[4/5]' delay={0} />

          <div className='grid grid-cols-2 gap-1.25'>
            <GalleryCard item={items[1]} aspectClass='aspect-[3/4]' delay={0.05} />
            <GalleryCard item={items[2]} aspectClass='aspect-[3/4]' delay={0.1} />
          </div>

          <GalleryCard item={items[3]} aspectClass='aspect-[4/5]' delay={0} />

          <div className='grid grid-cols-2 gap-1.25'>
            <GalleryCard item={items[4]} aspectClass='aspect-square' delay={0.05} />
            <GalleryCard item={items[5]} aspectClass='aspect-square' delay={0.1} />
          </div>

          {items[6] && <GalleryCard item={items[6]} aspectClass='aspect-[5/6]' delay={0} />}

          {items[7] && items[8] && (
            <div className='grid grid-cols-2 gap-1.25'>
              <GalleryCard item={items[7]} aspectClass='aspect-[4/5]' delay={0.05} />
              <GalleryCard item={items[8]} aspectClass='aspect-[4/5]' delay={0.1} />
            </div>
          )}
        </div>

        <motion.div
          custom={0.1}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className='relative mt-16 flex items-center justify-center gap-6'>
          <div className='h-px flex-1 bg-surface-container-high' />
          <p
            className='text-[#3d3d3d] whitespace-nowrap'
            style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase' }}>
            Brand Ambassadorships &amp; Campaigns
          </p>
          <div className='h-px flex-1 bg-surface-container-high' />
        </motion.div>
      </div>
    </section>
  );
}
