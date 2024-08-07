import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-4 h-12 md:h-16"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-12 md:gap-20 md:grid-cols-3">
            <div>
              <h2 className="mb-4 text-lg font-bold uppercase tracking-wide">
                Resources
              </h2>
              <ul className="text-sm space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-gray-300 transition-colors"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-bold uppercase tracking-wide">
                Follow us
              </h2>
              <ul className="text-sm space-y-2">
                <li>
                  <a
                    href="https://github.com/hiteshchoudhary"
                    className="hover:text-gray-300 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-bold uppercase tracking-wide">
                Legal
              </h2>
              <ul className="text-sm space-y-2">
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-600" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm">
            © 2023{" "}
            <a
              href="https://hiteshchoudhary.com/"
              className="hover:text-gray-300 transition-colors"
            >
              hiteshchoudhary
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link to="#" className="hover:text-gray-300 transition-colors">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8 19"
              >
                <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="#" className="hover:text-gray-300 transition-colors">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </Link>
            <Link to="#" className="hover:text-gray-300 transition-colors">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 17"
              >
                <path d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link to="#" className="hover:text-gray-300 transition-colors">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 .333A9.911 9.911 0 0 0 6.66 1.194a9.895 9.895 0 0 0-3.47 3.47 9.911 9.911 0 0 0-1.194 3.34C1.333 8.673 1.333 10 1.333 10s0 1.327.663 2.007a9.911 9.911 0 0 0 1.194 3.34 9.895 9.895 0 0 0 3.47 3.47A9.911 9.911 0 0 0 10 18.667c1.327 0 2.673-.663 3.34-1.194a9.895 9.895 0 0 0 3.47-3.47 9.911 9.911 0 0 0 1.194-3.34c.663-1.327.663-2.673.663-2.673s0-1.327-.663-2.007a9.911 9.911 0 0 0-1.194-3.34 9.895 9.895 0 0 0-3.47-3.47A9.911 9.911 0 0 0 10 .333zm0 1.334a8.578 8.578 0 0 1 2.554.464 8.579 8.579 0 0 1 2.414 1.328 8.579 8.579 0 0 1 1.328 2.414 8.578 8.578 0 0 1 .464 2.554c0 1.087-.087 2.173-.464 3.24a8.579 8.579 0 0 1-1.328 2.414 8.579 8.579 0 0 1-2.414 1.328 8.578 8.578 0 0 1-2.554.464c-1.087 0-2.173-.087-3.24-.464a8.579 8.579 0 0 1-2.414-1.328 8.579 8.579 0 0 1-1.328-2.414 8.578 8.578 0 0 1-.464-2.554c0-1.087.087-2.173.464-3.24a8.579 8.579 0 0 1 1.328-2.414 8.579 8.579 0 0 1 2.414-1.328A8.578 8.578 0 0 1 10 1.667zm0 3.333a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.333a3.667 3.667 0 1 1 0 7.333 3.667 3.667 0 0 1 0-7.333zm4.167-1.833a1.167 1.167 0 1 0 0 2.333 1.167 1.167 0 0 0 0-2.333z" />
              </svg>
              <span className="sr-only">Instagram page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
