import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

export const generateStaticParams = async () => {
  // REMOVED: draftMode() check. This function only runs at build time.
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    // It should only fetch published content for the static build.
    version: "published",
  });

  return response.data.stories.map((story) => ({ slug: story.slug }));
};

const fetchTourPage = async (slug) => {
  const { isEnabled } = draftMode(); // CORRECT: This runs on request, so it can check for cookies.

  const client = getStoryblokApi();
  const response = await client.getStory(`tours/${slug}`, {
    // This logic is now perfect. It handles development, draft mode, and production.
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response.data.story;
};

const TourPage = async ({ params }) => {
  // Using destructuring for cleaner code
  const story = await fetchTourPage(params.slug);
  return <StoryblokStory story={story} />;
};

export default TourPage;
