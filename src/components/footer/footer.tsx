"use client";

import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-gray-400 px-[7rem]">
      <div className="container mx-auto px-6 lg:px-16 py-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between border-b border-gray-800 pb-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/dexpath-logo.png" // replace with your logo in /public
              alt="Dexpath Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-gray-200">DEXPATH</span>
          </div>

          {/* Socials */}
          <div className="flex items-center mt-6 md:mt-0 space-x-4">
            <span className="text-sm">Follow Us On Social Media</span>
            <div className="flex space-x-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black border border-gray-800 hover:bg-gray-800"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black border border-gray-800 hover:bg-gray-800"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black border border-gray-800 hover:bg-gray-800"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 py-10">
          <div>
            <h4 className="text-white font-semibold mb-3">Home</h4>
            <ul className="space-y-2 text-sm">
              <li>Benefits</li>
              <li>Our Testimonials</li>
              <li>Partners</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Projects</h4>
            <ul className="space-y-2 text-sm">
              <li>AI Clean</li>
              <li>Delivery Robots</li>
              <li>Self-Balancing Vehicles</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Our Team</li>
              <li>Achievements</li>
              <li>Awards</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Careers</h4>
            <ul className="space-y-2 text-sm">
              <li>Job Openings</li>
              <li>Benefits & Perks</li>
              <li>Employee Referral</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Blogs</h4>
            <ul className="space-y-2 text-sm">
              <li>Our Blogs</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@dexpath.com</li>
              <li>Phone: +1-XXX-XXX-XXXX</li>
              <li>Address: DEXPATH HQ, [City, Country]</li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-6 text-sm text-gray-500">
          <p>@2025 Dexpath. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
