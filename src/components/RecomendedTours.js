import { RecomendedTour } from "./RecomendedTour";

export const RecomendedTours = (params) => {
  // console.log(params);

  return (
    <section>
      <h2>{params.blok.headline}</h2>
      {params.blok.tours.map((tour) => (
        <RecomendedTour story={tour} key={tour.content._uid} />
      ))}
    </section>
  );
};
