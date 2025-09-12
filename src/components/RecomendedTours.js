import { RecomendedTour } from "./RecomendedTour";
import { storyblokEditable } from "@storyblok/react/rsc";

export const RecomendedTours = (params) => {
  // console.log(params);

  return (
    <section {...storyblokEditable(params.blok)}>
      <h2>{params.blok.headline}</h2>
      {params.blok.tours.map((tour) => (
        <RecomendedTour story={tour} key={tour.content._uid} />
      ))}
    </section>
  );
};
