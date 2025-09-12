import { StoryblokComponent } from "@storyblok/react";

export const Page = (params) => {
  return (
    <main>
      {params.blok.blocks.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
};
