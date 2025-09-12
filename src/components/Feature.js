import { storyblokEditable } from "@storyblok/react/rsc";
export const Feature = (params) => {
  return (
    <div {...storyblokEditable(params.blok)}>
      <h2>{params.blok.headline}</h2>
      <p>{params.blok.content}</p>
    </div>
  );
};
