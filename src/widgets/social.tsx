import Link from "next/link";
import React from "react";
import { FaVk, FaGithub, FaTelegram } from "react-icons/fa";

const socials = [
  { icon: <FaTelegram />, path: "" },
  { icon: <FaVk />, path: "" },
  { icon: <FaGithub />, path: "" },
];

const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
