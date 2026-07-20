import Image from 'next/image';
import { cn } from '@/lib/utils';
import { photocards } from '@/data/artist';

export function HighlightPerformance() {
  const projects = photocards.slice(0, 4);

  return (
    <section id='highlights' className='bg-surface-container-lowest py-20 px-6 md:px-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-end justify-between mb-8 border-[#353534] pb-6'>
          <div>
            <div className='flex items-center gap-4'>
              <div className='w-1 h-12 bg-[#b8b8b8]' />
              <h2 className='text-3xl md:text-5xl font-black text-[#e5e2e1] tracking-tight font-headline'>
                고윤정 · TOP SERIES
              </h2>
            </div>
            <p className='text-on-surface-variant/50 text-xs tracking-[0.2em] font-body mt-2'>
              A selection of her most defining series
            </p>
          </div>
          <p className='hidden md:block text-[10px] tracking-[0.3em] text-on-surface-variant/30 uppercase font-label'>
            Top Performances · 2019—2026
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 grid-rows-[auto] md:grid-rows-2 md:h-162.5 gap-3 md:gap-5'>
          {projects.map((project, index) => {
            let gridStyles = '';
            if (index === 0) {
              gridStyles = 'col-span-2 row-span-1 md:row-span-2 aspect-square md:aspect-auto';
            } else if (index === 1) {
              gridStyles = 'col-span-1 row-span-1 md:row-span-2 aspect-[1/2] md:aspect-auto';
            } else if (index === 2) {
              gridStyles = 'col-span-1 row-span-1 aspect-[1/2] md:aspect-auto';
            } else {
              gridStyles = 'col-span-2 md:col-span-1 row-span-1 aspect-[1] md:aspect-auto';
            }

            return (
              <div
                key={project.id}
                className={cn(
                  'group relative cursor-pointer overflow-hidden rounded-2xl bg-surface-container',
                  gridStyles,
                )}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  priority={index === 0}
                  className={cn(
                    'object-cover opacity-75 transition-transform duration-1000 group-hover:scale-105',
                    index === 0
                      ? 'object-center'
                      : index === 1
                        ? 'object-[58%_center]'
                        : index === 2
                          ? 'object-[center_0%]'
                          : 'object-[center_40%]',
                  )}
                />

                <div className='absolute inset-0 bg-linear-to-t from-surface-container-lowest/90 via-surface-container-lowest/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500' />

                <div className='absolute top-3 right-3 md:top-4 md:right-4'>
                  <span
                    className={cn(
                      'text-[8px] md:text-[9px] tracking-[0.2em] uppercase px-2.5 md:px-3 py-1.5 rounded-full font-label transition-opacity duration-300 backdrop-blur-md border',
                      project.role.toUpperCase() === 'LEAD ROLE'
                        ? 'bg-[#e5e2e1]/10 text-[#e5e2e1] border-white/20'
                        : 'bg-[#131313]/10 text-[#e5e2e1] border-on-surface-variant/20',
                    )}>
                    {project.role}
                  </span>
                </div>

                <div className='absolute bottom-0 left-0 p-4 md:p-7 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500'>
                  <p className='text-on-surface-variant/70 text-[8px] md:text-[10px] tracking-[0.2em] uppercase mb-1.5 md:mb-2 font-label flex items-center gap-2'>
                    {project.type}
                    <span className='w-1 h-1 rounded-full bg-on-surface-variant/40'></span>
                    {project.year}
                  </p>
                  <h3 className='text-[#e5e2e1] text-md md:text-2xl font-bold tracking-tight font-headline mb-0.5 md:mb-1'>
                    {project.title}
                  </h3>
                  <p className='text-on-surface-variant/80 text-xs md:text-sm font-body line-clamp-4 md:line-clamp-3'>
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
