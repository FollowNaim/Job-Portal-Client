import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="border-t border-dashed border-black/30">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 pt-14 pb-8">
        <div className="md:col-span-3 md:pr-20 flex flex-col">
          <h4 className="text-2xl font-bold">
            Gear <span className="text-destructive">Arena</span>
          </h4>
          <p className="text-muted-foreground mt-3">
            span Delivering premium sports gear to elevate your game and inspire
            greatness.
          </p>
          <div className="mt-4">
            <p className="flex items-center gap-3">
              <MdOutlineDateRange />{" "}
              <span className="text-muted-foreground/90">
                Mon - Fri: 9AM - 10PM
              </span>
            </p>
            <p className="flex items-center gap-3 mt-2">
              <MdOutlineDateRange />{" "}
              <span className="text-muted-foreground/90">
                Sat-Sun: 10AM-8PM
              </span>
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4>Quick Links</h4>
          <div className="mt-4 text-muted-foreground/70">
            <ul className="flex flex-col gap-2">
              <Link to={"/"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Home
                </li>
              </Link>

              <Link to={"/auth/signin"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Shop
                </li>
              </Link>
              <Link to={"/auth/signin"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  About Us
                </li>
              </Link>
              <Link to={"/auth/signin"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4>Customer Support</h4>
          <div className="mt-4 text-muted-foreground/70">
            <ul className="flex flex-col gap-2">
              <Link to={"/auth/signin"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  FAQ
                </li>
              </Link>
              <Link to={"/auth/signin"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Shipping & Delivery
                </li>
              </Link>
              <Link to={"/auth/signin"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Track Your Order
                </li>
              </Link>
              <Link to={"/auth/signin"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Returns & Refunds
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4>Legal</h4>
          <div className="mt-4 text-muted-foreground/70">
            <ul className="flex flex-col gap-2">
              <Link to={"/auth/signin"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Privacy Policy
                </li>
              </Link>
              <Link to={"/auth/signin"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Terms & Conditions
                </li>
              </Link>
              <Link to={"/auth/signin"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Refund Policy
                </li>
              </Link>
              <Link to={"/auth/signin"}>
                <li className="hover:text-primary cursor-pointer hover:underline w-fit">
                  Cookies Policy
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="md:col-span-3">
          <h4>Our Instagram</h4>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row gap-5 md:gap-0 justify-between items-center">
          <p>Gear Arena © 2024 Developed by Naim</p>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com">
              <FaFacebook className="hover:text-black" size={22} color="blue" />
            </a>
            <a href="https://instagram.com">
              <FaInstagram className="hover:text-black" size={22} color="red" />
            </a>
            <a href="https://youtube.com">
              <FaYoutube className="hover:text-black" size={22} color="red" />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin className="hover:text-black" size={22} color="blue" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
