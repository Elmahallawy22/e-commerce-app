"use client";
"./signup.scss"
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AuthLayout from '../../components/loginComponent/AuthLayout';
import SocialButtons from '../../components/loginComponent/SocialButtons';
import Divider from '../../components/loginComponent/Divider';
import { useTranslations } from 'next-intl';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const t = useTranslations('Login');

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up data:', formData);
  };
  const inputStyle = "w-full px-4 py-3 border border-gray-300 rounded-lg outline-none";

  return (
    <>
      <Head>
        <title>{t('sign_up')}</title>
        <meta name="description" content="Create a new account" />
      </Head>

      <AuthLayout
        title={t('sign_up')}
        subtitle={t('message')}
        welcome={{ title: t('welcome'), message: t('sub_title') }}
      >
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={t('fName')}
                className={inputStyle}
                required
              />
            </div>
            <div>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={t('lName')}
                className={inputStyle}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('email')}
                className={inputStyle}
                required
              />
            </div>
            <div>
              <input
                id="phone"
                name="phone"
                type="number"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('phone')}
                className={inputStyle}
              />
            </div>
          </div>
          <div className="grid grid-cols-1  gap-3">
            <div>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={t('password')}
                className={inputStyle}
                required
              />
            </div>
            <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder={t('confirm_password')}
                className={inputStyle}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0060af] text-white py-3 px-4 mt-2 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t('sign_up')}
          </button>
        </form>

        <Divider />

        <SocialButtons mode="signup" />

        <p className="text-center text-sm text-gray-600 mt-6">
          {t('have_account')}{' '}
          <Link href="/login" className="text-blue-600 font-medium hover:underline">
            {t('login')}
          </Link>
        </p>
      </AuthLayout>
    </>
  );
};

export default SignUp;