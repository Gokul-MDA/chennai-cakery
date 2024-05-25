import React from "react";
import facebook from "assets/icons/facebook.png";
import instagram from "assets/icons/instagram.png";
import location from "assets/icons/footerLocation.png";

const Footer = () => {
  return (
    <footer className="px-14 py-8 bg-footer-background bg-footer-customGradient">
      <div className="flex">
        <div className="w-1/2">
          <h3 className="font-poppins font-semibold text-sm">
            Chennai
            <span className="text-Primary-Rosecus font-poppins font-semibold text-sm">
              Cakery
            </span>
          </h3>
          <div className="mt-6">
            <p className="font-poppins text-xs text-Layout-600">
              Lorem ipsum dolor sit amet consectetur. Vulputate sed tincidunt
              nisi dolor aliquet scelerisque tristique pellentesque sapien.
              Elementum nibh penatibus et viverra mattis ut semper diam velit.
              Ultricies elementum volutpat egestas elementum.
            </p>
            <div className="flex mt-2">
              <img src={facebook} height={8} width={12} className="mr-2" />
              <img src={instagram} height={8} width={12} />
            </div>
          </div>
        </div>
        <div className="container px-32">
          <div className="flex flex-wrap">
            <div className="md:w-1/3">
              <h3 className="uppercase mb-2 font-poppins font-semibold text-sm">
                Company
              </h3>
              <ul className="list-none">
                <li>
                  <a
                    href="#"
                    className="hover:underline font-poppins text-xs text-Layout-600"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline font-poppins text-xs text-Layout-600"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline font-poppins text-xs text-Layout-600"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline font-poppins text-xs text-Layout-600"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <h3 className="uppercase mb-2 font-poppins font-semibold text-sm">
                Contact
              </h3>
              <ul className="list-none">
                <li className="mb-1">
                  <p className="font-poppins text-xs text-Layout-600">
                    +91 99404 27774
                  </p>
                </li>
                <li className="mb-1">
                  <p className="font-poppins text-xs text-Layout-600">
                    thechennaicakery@gmail.com
                  </p>
                </li>
                <li className="mb-1">
                  <p className="font-poppins text-xs text-Layout-600">
                    Saidapet, Chennai-83.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex">
        <p className="font-poppins text-sm text-Layout-600">
          &copy; 2024 Chennai Cakery.
        </p>
        <p className="font-poppins text-sm text-Layout-600 ml-12 flex">
          <img src={location} height={10} width={18} />
          Tamilnadu, India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
