import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiTwitterXLine,
  RiTelegramLine,
  RiBarChart2Line,
} from "react-icons/ri";

export const socialData = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/@XCyberAI",
    Icon: RiYoutubeLine,
  },
 /*  {
    name: "Instagram",
    link: "https://instagram.com",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    Icon: RiFacebookLine,
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com",
    Icon: RiDribbbleLine,
  },
  {
    name: "Pinterest",
    link: "https://pinterest.com",
    Icon: RiPinterestLine,
  }, */
  {
    name: "Telegram",
    link: "https://t.me/XCyberAIPortal",
    Icon: RiTelegramLine,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/XCyberAI",
    Icon: RiTwitterXLine,
  },
  {
    name: "Chart",
    link: "https://www.dextools.io/app/en/ether/pair-explorer/0x9a19b6b8cf7bdb55d6811d68cdc0c340b0734c31",
    Icon: RiBarChart2Line,
  },
  {
    name: "Github",
    link: "https://github.com/XCyberAITech/XCyberAI",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
