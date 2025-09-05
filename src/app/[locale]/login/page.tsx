"use client";
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AuthLayout from '../../components/loginComponent/AuthLayout';
import SocialButtons from '../../components/loginComponent/SocialButtons';
import Divider from '../../components/loginComponent/Divider';
import { useTranslations } from 'next-intl';

interface FormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const t = useTranslations('Login');

  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: ''
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
    console.log('Login data:', formData);
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to your account" />
      </Head>

      <AuthLayout
        title={t('login')}
        subtitle={t('message')}
        welcome={{ title: t('welcome'), message: t('sub_title')}}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder={t('user_name')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={t('password')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              required
            />
            <a href="#" className="block text-sm text-[#0060af] mt-2 hover:underline">
              {t('forgot_password')}
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0060af] text-white py-3 px-4 rounded-lg font-medium"
          >
            {t('login')}
          </button>
        </form>

        <Divider />
        <SocialButtons mode="login" />
        <p className="text-center text-sm text-gray-600 mt-6">
          {t('no_account')}{' '}
          <Link href="/signup" className="text-[#0060af] font-medium hover:underline">
            {t('sign_up')}
          </Link>
        </p>
      </AuthLayout>
    </>
  );
};

export default Login;