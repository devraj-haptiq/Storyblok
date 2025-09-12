import { RecomendedTours } from "@/components/RecomendedTours";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

// Add this line to make the page dynamic, resolving the build error
export const dynamic = "force-dynamic";

const fetchToursPage = async () => {
  const client = getStoryblokApi();
  // Use the generic 'get' method with the correct API path
  const response = await client.get(`cdn/stories/tours`, { version: "draft" });
  return response.data.story;
};

const fetchAllTours = async () => {
  const client = getStoryblokApi();
  // Use the generic 'get' method here as well
  const response = await client.get(`cdn/stories`, {
    content_type: "tour",
    version: "draft",
  });
  return response.data.stories;
};

const ToursPage = async () => {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();

  return (
    <div>
      <StoryblokStory story={story} />
      {tours.map((tour) => {
        // Assuming RecomendedTour is set up to receive the full story object
        return <RecomendedTours story={tour} key={tour.uuid} />;
      })}
    </div>
  );
};

export default ToursPage;
