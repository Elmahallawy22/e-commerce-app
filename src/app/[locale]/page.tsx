'use client';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className='p-5'>
      <h1>{t('title')}</h1>
    </div>
  );
}