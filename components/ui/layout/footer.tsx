import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220]  text-white">
      {/* Eyebrow */}
      <div className="lg:mx-30  px-6 pt-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-white/30" />
          <p className="lg:text-xl uppercase tracking-widest text-white/60">
            Let’s stay connected
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className=" lg:mx-30 p-8 pb-16 grid lg:grid-cols-4 gap-18">
        {/* Brand */}
        <div className="space-y-4">
          {/*           <Image
            src="/nav_images/PPI_logo.png"
            alt="logo"
            width={300}
            height={400}
          /> */}
          <h3 className="text-md">Panamed Philippines Inc.</h3>
          <p className=" text-white/70 leading-relaxed">
            Delivering quality healthcare solutions with integrity and
            innovation for over 20 years.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-md uppercase tracking-wide mb-4">Company</h4>
          <ul className="space-y-3  text-white/70">
            <li>5F Meriton One Building 1668 Quezon </li>
            <li>Avenue Quezon City 1103</li>
            <li>Philippines</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-md  uppercase tracking-wide mb-4">
            Corporate Address
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href="/products" className="hover:text-white">
                Medical Equipment
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-white">
                Diagnostic Solutions
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-white">
                Consumables
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-white">
                After-Sales Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-md  uppercase tracking-wide mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>📍 Manila, Philippines</li>
            <li>📞 +63 123 456 7890</li>
            <li>✉️ info@progressivemedical.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="lg:mx-30  px-6 py-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/60">
          <span>© {new Date().getFullYear()} Panamed Philippines Inc.</span>
          <div className="flex gap-3">
            <a href="/terms" className="hover:text-white">
              <FacebookIcon width={22} />
            </a>
            <a href="/privacy" className="hover:text-white">
              <InstagramIcon width={22} />
            </a>
            <a href="/privacy" className="hover:text-white">
              <YoutubeIcon width={22} />
            </a>
            <a href="/privacy" className="hover:text-white">
              <LinkedinIcon width={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
