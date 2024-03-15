import React from "react";
import logo from "../assets/images/wootlab.png";
import commonwealthlogo from "../assets/images/common_wealth_logo.svg";
import dsnImage from "../assets/images/EventLandingPage.jpg";

function Header() {
  return (
    <>
      <div
        className="bg-cover bg-center md:bg-center md:bg-cover bg-no-repeat w-full h-[350px] md:h-[840px]"
        style={{ backgroundImage: `url(${dsnImage})` }}
      >
        <div className="w-full h-full bg-[rgba(0,0,0,0.35)]">
          <header className=" bg-white absolute inset-x-0 top-0 z-50">
            <nav
              className="flex items-center justify-between p-6 lg:px-8"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="w-[110px] md:w-[150px]" src={logo} alt="" />
                </a>
              </div>
              <div className="flex lg:hidden">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  <img
                    src={commonwealthlogo}
                    alt="common wealth logo"
                    className="h-12 w-[130px]"
                  />
                </a>
              </div>

              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  <img src={commonwealthlogo} alt="common wealth logo" />
                  {/* Log in <span aria-hidden="true">&rarr;</span> */}
                </a>
              </div>
            </nav>
            {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
          </header>
        </div>
      </div>
    </>
  );
}

export default Header;
