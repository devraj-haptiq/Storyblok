import { RecomendedTour } from "@/components/RecomendedTour";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const fetchToursPage = async () => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory("tours", {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response.data.story;
};

const fetchAllTours = async () => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response.data.stories;
};

const ToursPage = async () => {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();
  console.log(tours);

  return (
    <div>
      <StoryblokStory story={story} />
      {tours.map((tour) => {
        return <RecomendedTour story={tour} key={tour.content._uid} />;
      })}
    </div>
  );
};

export default ToursPage;
