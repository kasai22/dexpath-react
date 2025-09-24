// src/components/Header.tsx

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          {/* Replace with your actual logo image if needed */}
          <Image
            src="/logo.png" // replace with your logo in /public
            alt="Dexpath Logo"
            width={200}
            height={120}
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <Link
            href="/"
            className="px-4 py-2 rounded-full bg-neutral-800 text-white"
          >
            Home
          </Link>
          <Link href="/projects" className="hover:text-gray-300">
            Projects
          </Link>
          <Link href="/careers" className="hover:text-gray-300">
            Careers
          </Link>
          <Link href="/sustainability" className="hover:text-gray-300">
            Sustainability
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
