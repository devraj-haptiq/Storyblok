import { StoryblokComponent } from "@storyblok/react";
export const Grid = (params) => {
  return (
    <section>
      <h1> {params.blok.headline}</h1>
      {params.blok.items.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </section>
  );
};
