import Link from "next/link";
import React from "react";
import dev from "/public/development.gif";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/home" className="link link-hover">
          Home
        </Link>
        <Link href="/services" className="link link-hover">
          Services
        </Link>
        <Link href="/shop" className="link link-hover">
          Shop
        </Link>
        <Link href="/aboutUs" className="link link-hover">
          About Us
        </Link>
        <Link
          href="/serviceRequest"
          className="link link-hover text-purple-400"
        >
          Service Request
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href=" https://www.youtube.com/@pfix-com-bd">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current hover:animate-bounce"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="https://www.facebook.com/pfix.com.bd">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current hover:animate-bounce"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/pfix.com.bd/">
            <svg
              viewBox="0 0 50 50"
              width="24px"
              height="24px"
              className="fill-current hover:animate-bounce"
            >
              {" "}
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@pfix.com.bd">
            <svg
              viewBox="0 0 50 50"
              width="24px"
              height="24px"
              className="fill-current hover:animate-bounce"
            >
              {" "}
              <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center text-white font-bold tracking-wider">
            <div className="flex flex-row justify-center items-start sm:items-center">
              <div className="flex items-center text-center">
                <span className="text-xs">
                  Copyright © 2024 - All right reserved by PFIX
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <Image
                src={dev}
                alt="Dev"
                className="m-1 bg-purple-200 p-1 rounded-full w-4"
              />
              <span className="text-xs">Developed by </span>
              <a
                className="text-purple-400 text-shadow font-bold text-sm hover:animate-bounce"
                href="https://musamolla.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Musa Molla
              </a>
            </div>
          </div>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
