import { storyblokEditable } from "@storyblok/react/rsc";

const Article = (props) => {
  const { day, title, headline, author_name, description } = props.blok;
  return (
    <main {...storyblokEditable(props.blok)}>
      <h1>{title}</h1>
      <p>{day}</p>
      <p>{headline}</p>
      <p>{author_name}</p>
      <p>{description}</p>
    </main>
  );
};

export default Article;
