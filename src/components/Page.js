import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

export const Page = (params) => {
  return (
    <main {...storyblokEditable(params.blok)}>
      {params.blok.blocks.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
};
