import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-secondary-text text-p flex flex-row justify-around absolute py-[0.5rem] w-full bottom-0">
      <p>@ 2024 ProfileScreener.com</p>
      <div className="flex flex-row gap-[2rem]">
        <Link href="/contact">Contact Us</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
    </div>
  );
};

export default Footer;
