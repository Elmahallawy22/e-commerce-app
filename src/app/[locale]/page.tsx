'use client';
import "./loader.scss";
import React from "react";``
import HomePageComponent from "./home/HomePageComponent";

export default function HomePage() {
  // const [loading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="bg-[#e2e2e2] flex items-center justify-center h-screen fixed top-0 left-0 w-full z-50">
  //       <div className="loader"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="">
      <HomePageComponent />
    </div>
  );
}