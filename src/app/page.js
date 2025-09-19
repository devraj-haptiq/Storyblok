import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const fetchHomePage = async () => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client.getStories(``, {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
    resolve_relations: "reccomended_tours.tours",
  });
  return response.data.story;
};

const HomePage = async () => {
  const story = await fetchHomePage();
  return (
    <StoryblokStory
      story={story}
      bridgeOptions={{ resolveRelations: ["reccomended_tours.tours"] }}
    />
  );
};

export default HomePage;
