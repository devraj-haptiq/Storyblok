import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

// This one line tells Next.js to always render this page on a server.
// This resolves the conflict with the static build process.

const fetchHomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.get(`cdn/stories/home`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    resolve_relations: "reccomended_tours.tours",
  });
  return response.data.story;
};

const HomePage = async () => {
  const story = await fetchHomePage();
  return <StoryblokStory story={story} />;
};

export default HomePage;
