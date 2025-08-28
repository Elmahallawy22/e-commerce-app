'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const TopBar = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const [lngValue, setLngValue] = useState<string>("");

  const convertLanguage = (value: string): void =>
    router.push("/" + value + currentPath.slice(3));

  useEffect(() => {
    if (currentPath.slice(0, 3) === "/ar") {
      document.body.dir = "rtl";
      setLngValue("ar")
    }
    else {
      document.body.dir = "ltr";
      setLngValue("en")
    }
  }, []);

  return (
    <div className='top-bar flex justify-center items-center h-[28px]'>
      <div className="container flex justify-between">
        <div className='flex items-center gap-2'>
          <button className={`${lngValue === "en" && "active"}`}
            onClick={() => { convertLanguage("en") }}
          >English</button>
          <span className='text-[#f2da5e]'>|</span>
          <button className={`${lngValue === "ar" && "active"}`}
            onClick={() => { convertLanguage("ar") }}
          >العربية</button>
        </div>
        <p className='text-[#ff3b00] '>خصم 20% علي اول طلبية</p>
      </div>
    </div>
  )
}

export default TopBar;