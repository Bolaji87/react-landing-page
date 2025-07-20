import React, { useEffect } from "react";
import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

function Layout({ children, title }: LayoutProps) {
  useEffect(
    function () {
      document.title = title;
    },
    [title]
  );

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
