"use client";

import { apiPlugin, storyblokInit } from "@storyblok/react/";
import { Tour } from "./Tour";
import { Page } from "./Page";
import { Hero } from "./Hero";
import { Graduate } from "next/font/google";
import { Grid } from "./grid";
import { Feature } from "./Feature";
import { Testimonial } from "./Testimonial";
import { RecomendedTours } from "./RecomendedTours";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    reccmended_tours: RecomendedTours,
  },
  enableFallbackComponents: true,
});

export const StoryblokProvider = ({ children }) => {
  return <>{children}</>;
};
