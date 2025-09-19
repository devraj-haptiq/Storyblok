// components/NavLink.js
import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

export const NavLink = ({ blok }) => {
  // Handle home link vs. other links
  const href =
    blok.link.cached_url === "home" ? "/" : `/${blok.link.cached_url}`;

  return (
    <Link
      href={href}
      {...storyblokEditable(blok)}
      className="text-lg font-medium hover:text-blue-500 transition-colors"
    >
      {blok.label}
    </Link>
  );
};
