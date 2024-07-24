import Link from "next/link";
import React from "react";
import Navigation from "./navigation";
import { Button } from "@/shared/ui/button";
import MobileNavigation from "./mobile-navigation";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            ClausCode<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop navigation & hire me */}
        <div className="hidden xl:flex items-center gap-8">
          <Navigation />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* Mobile navigation */}
        <div className="xl:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
