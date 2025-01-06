import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">About Us</h3>
          <p className="text-gray-400">
            We are dedicated to making a positive impact in the world through
            charitable giving and community support.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Campaigns
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-gray-400">
            14th floor, Sky One, KalyaniNagar, Pune 411006, MH India
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Stay updated with our latest campaigns and news.
          </p>
          <form className="flex">
            <Input
              type="email"
              placeholder="Your email"
              className="rounded-r-none bg-gray-800 border-gray-700 text-white"
            />
            <Button
              type="submit"
              className="rounded-l-none bg-[#E84C3D] hover:bg-[#E84C3D]/90"
            >
              <Send size={20} />
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 Charity Organization. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-sm mr-4"
            >
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
