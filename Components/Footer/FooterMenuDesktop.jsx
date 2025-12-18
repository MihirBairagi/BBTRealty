import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterMenuDesktop = () => {
  return (
    <div className="footerMenuWrapper pt-40">
      <div className="lg:flex lg:justify-between">
        <div className="footerMenuCol">
          <div className="footerMenuHead">
            <h6 className="text-white">BBT World</h6>
          </div>
          <div className="footerMenu">
            <ul>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/team">The Team</Link>
              </li>

              <li>
                <Link href="/career">Career</Link>
              </li>
              <li>
                <Link href="/associates">Associates</Link>
              </li>
              <li>
                <Link href="/bbt-squad">BBT Squad</Link>
              </li>

              <li>
                <Link href="/wallpapers">BBT Wallpapers</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerMenuCol">
          <div className="footerMenuHead">
            <h6 className="text-white">General</h6>
          </div>
          <div className="footerMenu">
            <ul>
              <li>
                <Link href="/faq">Faq</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/guides">Guides</Link>
              </li>
              <li>
                <Link href="/insurances/car-insurance">
                   Insurance
                </Link>
              </li>
              <li>
                <Link href="/modifications">Modifications</Link>
              </li>
              <li>
                <Link href="/car-detailing">Car Detailing</Link>
              </li>
              <li>
                <Link href="/car-news">Car News</Link>
              </li>
              <li>
                <Link href="/showrooms">Showrooms</Link>
              </li>

              <li>
                <Link href="/workshop">Workshop</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerMenuCol footerMenuColLarge">
          <div className="footerMenuHead">
            <h6 className="text-white">Brands</h6>
          </div>
          <div className="footerMenu">
            <div className="flex flex-wrap justify-between">
              <ul>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerMenuCol">
          <div className="footerMenuHead">
            <h6 className="text-white">Styles</h6>
          </div>
          <div className="footerMenu">
            <ul>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default FooterMenuDesktop;
