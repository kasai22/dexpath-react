"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-[7.5rem] py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <Image
            src="/logo.png" // replace with your DexPath logo path
            alt="Dexpath Logo"
            width={120}
            height={120}
            className="mb-4"
          />
        </div>

        {/* Products */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Products</h3>
          <ul className="space-y-2">
            <li>Headphones</li>
            <li>Earphones</li>
            <li>Earbuds</li>
            <li>Accesories</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Support</h3>
          <ul className="space-y-2">
            <li>Product help</li>
            <li>Register</li>
            <li>Updates</li>
            <li>Provides</li>
          </ul>
        </div>

        {/* Subscribe + Social */}
        <div className="flex flex-col space-y-6">
          {/* Subscribe */}
          <div className="flex items-center rounded-lg bg-[#1A1A1A] overflow-hidden">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent px-4 py-3 text-gray-300 focus:outline-none"
            />
            <button className="flex items-center gap-2 bg-black px-5 py-3 text-white hover:bg-gray-800 transition">
              <span>✈</span> Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 rounded bg-[#1A1A1A] hover:bg-gray-800">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded bg-[#1A1A1A] hover:bg-gray-800">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded bg-[#1A1A1A] hover:bg-gray-800">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © dexpath. All right reserved
      </div>
    </footer>
  );
}
