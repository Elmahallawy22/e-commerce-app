'use client'
import React from 'react';
import "./contacts.scss";
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Page = () => {
  const t = useTranslations('FooterPages');
  return (
    <section className='py-8'>
      <div className="container mx-auto flex justify-evenly flex-wrap gap-8">
        <div className="space-y-2">
          <p className='text-xl md:text-2xl'>{t('we_ready')}</p>
          <p className='md:text-lg text-[#7f8499]'>{t('contact_us')}</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/contactPageIcons/help_center.svg"
            alt='help center'
            width={40}
            height={40}
          />
          <div className="space-y-1">
            <p className="text-[#7f8499] text-sm">{t('help_center')}</p>
            <p className="text-xl">Help. wolf.com</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/contactPageIcons/email.svg"
            alt='help center'
            width={40}
            height={40}
          />
          <div className="space-y-1">
            <p className="text-[#7f8499] text-sm">{t('help_via_email')}</p>
            <p className="text-xl">Egypt@.wolf.com</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/contactPageIcons/phone.svg"
            alt='help center'
            width={40}
            height={40}
          />
          <div className="space-y-1">
            <p className="text-[#7f8499] text-sm">{t('help_via_phone')}</p>
            <p className="text-xl">12345</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page;