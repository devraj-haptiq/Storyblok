import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";
import { version } from "react";

export const fetchInfoPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`info`, {
    version: "draft",
  });
  return response.data.story;
};

const InfoPage = async () => {
  const story = await fetchInfoPage();
  return <StoryblokComponent blok={story.content} />;
};

export default InfoPage;
