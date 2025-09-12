import { storyblokEditable } from "@storyblok/react/rsc";

export const Tour = (props) => {
  return (
    <main {...storyblokEditable(props.blok)}>
      <h1>{props.blok.name}</h1>
    </main>
  );
};
