import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);

  // 1. Get the secret and slug from the search params
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  // 2. Check if the secret token from the URL matches the one in your environment variables
  if (secret !== process.env.STORYBLOK_PREVIEW_SECRET) {
    return new NextResponse("Invalid token", { status: 401 });
  }

  // 3. If the token is valid, enable draft mode
  draftMode().enable();

  // 4. Redirect to the slug path, preserving other query params from Storyblok.
  // The redirect function automatically throws an error, so you don't need to return it
  redirect(`/${slug}?${searchParams.toString()}`);
};
