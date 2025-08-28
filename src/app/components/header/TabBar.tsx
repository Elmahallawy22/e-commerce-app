"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

type TabbarLinkParams = {
  link: string;
  UnAvctiveIcon: string;
  AvctiveIcon: string;
  title: string;
}

const TabbarLink = ({ link, UnAvctiveIcon, AvctiveIcon, title }: TabbarLinkParams) => {
  const currentPath = usePathname();
  const comparedCurrentPath = currentPath === `/en${link}` || currentPath === `/ar${link}`;

  return (
    <Link href={`/${link}`}>
      {comparedCurrentPath ?
        <Image
          src={AvctiveIcon}
          width={24}
          height={24}
          alt='active-home-icon'
        />
        :
        <Image
          src={UnAvctiveIcon}
          width={24}
          height={24}
          alt='home-icon'
        />
      }
      <span className={`${comparedCurrentPath && "active"}`}>{title}</span>
    </Link>
  )
}

type TabbarParams = Record<'home' | 'cart' | 'wishlist' | 'login', string>;

const TabBar = ({ home, cart, wishlist, login }: TabbarParams) => {
  return (
    <div className='tab-bar'>
      <TabbarLink
        link=''
        UnAvctiveIcon='/navbarIcon/MobHome.png'
        AvctiveIcon="/navbarIcon/activeHome.png"
        title={home}
      />
      <TabbarLink
        link='/cart'
        UnAvctiveIcon="/navbarIcon/MobCart.png"
        AvctiveIcon="/navbarIcon/ActiveCart.png"
        title={cart}
      />
      <TabbarLink
        link='/wishlist'
        UnAvctiveIcon="/navbarIcon/MobHeart.png"
        AvctiveIcon="/navbarIcon/ActiveHeart.png"
        title={wishlist}
      />
      <TabbarLink
        link='/login'
        UnAvctiveIcon="/navbarIcon/MobUser.png"
        AvctiveIcon="/navbarIcon/ActiveUser.png"
        title={login}
      />
    </div>
  )
}

export default TabBar;