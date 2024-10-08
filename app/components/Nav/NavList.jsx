import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/",
    name: "Explore",
  },
  {
    href: "/",
    name: "About",
  },
  {
    href: "/",
    name: "Menu",
  },
  {
    href: "/",
    name: "Contact",
  },
];

const letterAnim = {
  initial: { y: "100%", opacity: 0 },
  enter: (i) => ({
    y: 0,
    transition: { duration: 1, ease: [0.95, 0, 0.23, 1], delay: i[0] },
    opacity: 1,
  }),
  exit: (i) => ({
    y: "100%",
    transition: { duration: 0.8, ease: [0.95, 0, 0.23, 1], delay: i[1] },
    opacity: 0,
  }),
};

const getLetter = (name) => {
  let letters = [];

  name.split("").forEach((letter, index) => {
    letters.push(
      <motion.span
        key={index}
        variants={letterAnim}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[index * 0.04, (name.length - index) * 0.01]}
      >
        {letter}
      </motion.span>
    );
  });

  return letters;
};

const NavList = () => {
  return (
    <ul className="flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase">
      {links.map((link, index) => (
        <Link href={link.href} key={index}>
          {getLetter(link.name)}
        </Link>
      ))}
    </ul>
  );
};

export default NavList;
