import Image from 'next/image';
import './PagesOfFooter.scss'
import React from 'react';
import { useTranslations } from 'next-intl';

interface PagesOfFooterProps {
  title: 'who' | 'terms' | 'policies';
}


const PagesOfFooter: React.FC<PagesOfFooterProps> = ({ title }) => {
  const t = useTranslations("FooterPages");

  return (
    <div className='pages-of-footer container mx-auto p-12 relative my-6 md:my-16 2xl:max-w-[1300px]'>
      <div className="space-y-5 text-lg font-medium w-[95%]">
        <Image
          src="/logo.svg"
          alt="logo"
          width={120}
          height={120}
          className='logo absolute top-8'
        />
        <h2 className='text-2xl'>{t(`${title}`)}</h2>
        <div className="space-y-2">
          <p>{t('welcome')}</p>
          <p>{t('p1')}</p>
        </div>
        <p>{t('p2')}</p>
        <p>{t('p3')}</p>
        <p>{t('p4')}</p>
        <p>{t('p5')}</p>
        <p>{t('p6')}</p>
      </div>
    </div>
  )
}

export default PagesOfFooter