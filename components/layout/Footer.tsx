import Image from 'next/image';

export function Footer() {
  return (
    <footer className='bg-black border-t border-white/5 py-10 px-6 md:px-10'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-center md:text-left'>
        <div className='flex justify-center gap-8 md:justify-start'>
          <a
            href='https://www.instagram.com/goyounjung/'
            className='text-[10px] tracking-[0.2em] uppercase text-white/50 hover:text-white/60 transition-colors'>
            Instagram
          </a>
          <a
            href='#'
            className='text-[10px] tracking-[0.2em] uppercase text-white/50 hover:text-white/60 transition-colors'>
            Connect
          </a>
          <a
            href='#'
            className='text-[10px] tracking-[0.2em] uppercase text-white/50 hover:text-white/60 transition-colors'>
            Contact
          </a>
        </div>

        <div className='flex flex-col md:flex-row md:gap-8 items-center'>
          <p className='text-[10px] tracking-[0.3em] uppercase text-[#AF944F] font-bold mb-2 md:mb-0'>Representation</p>
          <a
            href='https://maa.co.kr/'
            target='_blank'
            className='opacity-60 hover:opacity-100 transition-opacity block mb-2 md:mb-0'>
            <Image
              src='/logos/maa.webp'
              alt='MAA Entertainment Logo'
              width={240}
              height={150}
              className='h-8 w-auto object-contain'
            />
          </a>
          <p className='text-[10px] uppercase text-white/50'>For press & booking inquiries</p>
        </div>

        <div className='flex justify-center md:justify-end'>
          <p className='text-[10px] tracking-widest text-white/50 leading-relaxed'>
            © 2026 GO YOUNJUNG.
            <span className='hidden md:inline'> </span>
            ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
