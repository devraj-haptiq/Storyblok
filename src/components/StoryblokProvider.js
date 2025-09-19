"use client";

import { apiPlugin, storyblokInit } from "@storyblok/react";
import { Tour } from "./Tour";
import { Page } from "./Page";
import { Hero } from "./Hero";
import { Graduate } from "next/font/google";
import { Grid } from "./grid";
import { Feature } from "./Feature";
import { Testimonial } from "./Testimonial";
import { RecomendedTours } from "./RecomendedTours";
import { Header } from "./Header";
import ReviewInfo from "./ReviewInfo";
import Carousel from "./Carousel";
import Article from "./Article";

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
    header: Header,
    review_info: ReviewInfo,
    carousel: Carousel,
    article: Article,
  },
  enableFallbackComponents: true,
});

export const StoryblokProvider = ({ children }) => {
  return <>{children}</>;
};
