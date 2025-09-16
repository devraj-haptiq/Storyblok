import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import Image from "next/image";

export const Header = ({ blok }) => {
  // console.log(blok);
  return (
    <header {...storyblokEditable(blok)} className="w-full bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <Image
            src={blok.logo.filename}
            alt={blok.logo.alt}
            width={150}
            height={40}
            priority
          />
        </Link>
        <div className="flex items-center space-x-8">
          {blok.navlinks.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </nav>
    </header>
  );
};
