import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

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
