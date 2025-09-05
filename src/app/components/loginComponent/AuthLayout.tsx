import Image from 'next/image';
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  welcome: {
    title: string;
    message: string;
  };
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle, welcome}) => {
  return (
    <div className="md:min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 flex items-center justify-center py-20 md:py-8 px-4 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-[#0060af] mb-2">{title}</h1>
          <p className="text-[#969696] mb-8">{subtitle}</p>
          {children}
        </div>
      </div>
      <div
        className="hidden flex-1 md:flex items-center justify-center p-12 text-white bg-[#0060af]"
      >
        <div className="max-w-md flex flex-col items-center">
          <Image
            src="/logoo_login.svg"
            alt='login image'
            width={150}
            height={200}
          />
          <h2 className="text-4xl font-bold mb-6">{welcome.title}</h2>
          <p className="text-xl opacity-90">{welcome.message}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;