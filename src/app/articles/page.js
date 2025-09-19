import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { resolve } from "styled-jsx/css";

const fetchArticlePage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory("articles", {
    version: "draft",
    resolve_relations: "carousel.featured_articles",
  });
  return response.data.story;
};

const ArticlePage = async () => {
  const story = await fetchArticlePage();
  return <StoryblokStory story={story} />;
};

export default ArticlePage;
