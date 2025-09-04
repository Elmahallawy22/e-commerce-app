import { useTranslations } from 'next-intl';
import React from 'react';

interface SocialButtonsProps {
  mode: 'login' | 'signup';
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ mode }) => {
  const services = [
    { name: 'Google', color: 'red' },
    { name: 'Facebook', color: 'blue' },
    { name: 'Twitter', color: 'sky' }
  ];

  const t = useTranslations('Login');

  return (
    <div className="grid grid-cols-1 gap-3 mt-4">
      {services.map((service, index) => (
        <button
          key={index}
          className={`py-2 px-4 border border-gray-300 
          text-[#a2a2a2] rounded-lg font-medium hover:bg-[#eee] hover:text-black transition`}
        >
          <span className="ml-2">{mode === 'login' ? t('login') : t('sign_up')} {t('with')} {service.name}</span>
        </button>
      ))}
    </div>
  );
};

export default SocialButtons;