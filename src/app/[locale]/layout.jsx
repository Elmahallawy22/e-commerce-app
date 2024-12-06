import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '../../components/header/Header';
// import { notFound } from 'next/navigation';
// import { routing } from '../../i18n/routing';

export default async function LocaleLayout({ children, params: { locale } }) {

  // if (!routing.locales.includes(locale)) {
  // notFound();
  // }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}