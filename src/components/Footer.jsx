import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black py-20 text-white">
      <div className="wrapper grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <h1 className="font-bold text-2xl">Jadoo</h1>
          <p className="w-[80%] mx-auto text-center lg:mx-0 lg:text-start lg:w-full">
            Book your trip in minute, get full Control for much longer.
          </p>
          <div className="flex text-lg gap-2">
            <Link
              href="#"
              className="bg-secondary w-8 h-8 flex items-center justify-center rounded-md text-black"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="bg-secondary w-8 h-8 flex items-center justify-center rounded-md text-black"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="bg-secondary w-8 h-8 flex items-center justify-center rounded-md text-black"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="bg-secondary w-8 h-8 flex items-center justify-center rounded-md text-black"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-semibold text-lg">Company</h1>
          <div className="flex flex-col gap-3 items-center">
            <Link href="#">About</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Mobile</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-semibold text-lg">Contact</h1>
          <div className="flex flex-col gap-3 items-center">
            <Link href="#">Help/FAQ</Link>
            <Link href="#">Press</Link>
            <Link href="#">Affiliate</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-semibold text-lg">More</h1>
          <div className="flex flex-col gap-3 items-center">
            <Link href="#">Airline Fees</Link>
            <Link href="#">Airlines</Link>
            <Link href="#">Low fare trips</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
