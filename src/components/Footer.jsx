import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple Store </span> or{" "}
            <span className="underline text-blue">other retailer </span> near
            you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 00700-043-1843:{" "}
          </p>
        </div>
        <div className="bg-neutral-7 my-5 h-[1px]" />
        <div className="flex md:flew-row flex-col md:items-center text-xs">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 App Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray">
                {link}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
