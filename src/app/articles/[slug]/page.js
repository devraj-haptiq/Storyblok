import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";
import ArticlePage from "../page";

const fetchArticlePage = async (slug) => {
  const { isEnabled } = await draftMode(); // CORRECT: This runs on request, so it can check for cookies.

  const client = getStoryblokApi();
  const response = await client.getStory(`articles/${slug}`, {
    // This logic is now perfect. It handles development, draft mode, and production.
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response.data.story;
};

const ArticlesPage = async ({ params }) => {
  const { slug } = await params;
  const story = await fetchArticlePage(slug);

  if (!story) {
    return <h1>Page not found.</h1>;
  }

  return <StoryblokStory story={story} />;
};

export default ArticlesPage;
