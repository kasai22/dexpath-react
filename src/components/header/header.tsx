import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-[#0F0F10] text-white px-[7.5rem] py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.png" // replace with your logo path
          alt="DexPath Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Menu Items */}
      <ul className="flex space-x-8">
        <li>
          <Link
            href="#"
            className="font-semibold text-white hover:text-gray-400"
          >
            Home
          </Link>
        </li>
        <li>
          <Link href="/specs" className="text-gray-500 hover:text-gray-400">
            Specs
          </Link>
        </li>
        <li>
          <Link href="/case" className="text-gray-500 hover:text-gray-400">
            Case
          </Link>
        </li>
        <li>
          <Link href="/styles" className="text-gray-500 hover:text-gray-400">
            Styles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
