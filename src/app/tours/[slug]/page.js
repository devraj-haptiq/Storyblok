import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { version } from "react";

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: "draft",
  });

  return response.data.stories.map((story) => ({ slug: story.slug }));
};

const fetchTourPage = async (slug) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours/${slug}`, { version: "draft" });
  return response.data.story;
};

const TourPage = async (props) => {
  const story = await fetchTourPage(props.params.slug);
  return <StoryblokStory story={story} />;
};

export default TourPage;
