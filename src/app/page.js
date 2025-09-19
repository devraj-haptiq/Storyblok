// src/app/page.js

import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const fetchHomePage = async () => {
  // Await the draftMode() function to get its properties
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();

  // Use getStory to fetch a single story by its slug, e.g., "home"
  // This is more efficient and returns the correct data structure
  try {
    const response = await client.getStory(`home`, {
      version: isEnabled ? "draft" : "published",
      resolve_relations: "reccomended_tours.tours",
    });
    // Return the single story object
    return response.data.story;
  } catch (error) {
    console.error("Failed to fetch Storyblok story:", error);
    return null; // Return null on error
  }
};

const HomePage = async () => {
  const story = await fetchHomePage();

  if (!story) {
    return <h1>Page not found.</h1>;
  }

  return (
    <StoryblokStory
      story={story}
      bridgeOptions={{ resolveRelations: ["reccomended_tours.tours"] }}
    />
  );
};

export default HomePage;
