"use client";

import { type JSX, type ReactNode, useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PostHogReactProvider } from "posthog-js/react";

const POSTHOG_API_HOST = "https://eu.i.posthog.com";
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;

export function PostHogProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  useEffect(() => {
    if (!POSTHOG_KEY) {
      return;
    }

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_API_HOST,
    });
  }, []);

  return <PostHogReactProvider client={posthog}>{children}</PostHogReactProvider>;
}
