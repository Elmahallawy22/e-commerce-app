import "./Header.scss";
import React from 'react'
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import { useTranslations } from "next-intl";
import NavCategories from "./NavCategories";

const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className="header">
      <TopBar />
      <MainHeader
        search={t('search')}
        login={t('login')}
        wishlist={t('wishlist')}
        cart={t('cart')}
        home={t('homely')}
      />
      <NavCategories />
    </header>
  )
}

export default Header