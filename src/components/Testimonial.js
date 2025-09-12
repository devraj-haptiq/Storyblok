import { storyblokEditable } from "@storyblok/react/rsc";

export const Testimonial = (params) => {
  return (
    <div {...storyblokEditable(params.blok)}>
      <p>{params.blok.comment}</p>
      <p>{params.blok.name}</p>
    </div>
  );
};
