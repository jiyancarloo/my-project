import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

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
      <div className=" lg:mx-30 p-8 pb-16 grid lg:grid-cols-4 gap-12">
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
          <h4 className="text-base uppercase tracking-wide mb-4">
            Corporate Address
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>5F Meriton One Building 1668 Quezon </li>
            <li>Avenue Quezon City 1103</li>
            <li>Philippines</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-md  uppercase tracking-wide mb-4">
            Pickup Address
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>488 G. Araneta Avenue, corner Del Monte Avenue</li>
            <li>Brgy. Sienna, Quezon City 1114 Philippines</li>
            <li></li>
            <li></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-md  uppercase tracking-wide mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>📞 +63 2 8559 9558</li>
            <li>✉️ info@panamed.com.ph</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="lg:mx-30  px-6 py-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/60">
          <span>© {new Date().getFullYear()} Panamed Philippines Inc.</span>
          <div className="flex gap-3">
            <Link
              href="https://www.facebook.com/panamedph"
              className="hover:text-white">
              <FacebookIcon width={22} />
            </Link>
            <Link
              href="https://www.instagram.com/panamedphilippines/ "
              className="hover:text-white">
              <InstagramIcon width={22} />
            </Link>
            <Link
              href="https://www.youtube.com/@panamedphilippinesinc.2976/featured"
              className="hover:text-white">
              <YoutubeIcon width={22} />
            </Link>
            <Link href="/privacy" className="hover:text-white">
              <LinkedinIcon width={22} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
