import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">SkillSwap</h2>
          <p className="text-gray-500 mb-2">
            Exchange, learn, and grow your skills locally.
          </p>
          <p className="text-gray-500">Email: support@skillswap.com</p>
          <p className="text-gray-500">Phone: +880 1234 567890</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-500 space-y-2">
            <li>
              <a href="/" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="/profile" className="hover:text-primary transition">
                My Profile
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-primary transition">
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-primary transition">
                Signup
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-primary transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            &copy; {new Date().getFullYear()} SkillSwap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
