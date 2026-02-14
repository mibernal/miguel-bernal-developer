import { useEffect } from "react";

import { siteConfig } from "@/content/site";

type RouteSeoProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
};

function upsertMeta(nameOrProperty: "name" | "property", key: string, content: string) {
  const selector = `meta[${nameOrProperty}="${key}"]`;
  let node = document.head.querySelector<HTMLMetaElement>(selector);

  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(nameOrProperty, key);
    document.head.appendChild(node);
  }

  node.content = content;
}

export function RouteSeo({ title, description, path, keywords, image }: RouteSeoProps) {
  useEffect(() => {
    const pageTitle = `${title} | ${siteConfig.name}`;
    const normalizedPath = path === "/" ? "" : path.replace(/^\//, "");
    const canonicalUrl = new URL(normalizedPath, siteConfig.siteUrl).toString();
    const ogImage = image ?? siteConfig.defaultOgImage;

    document.title = pageTitle;
    upsertMeta("name", "description", description);

    if (keywords) {
      upsertMeta("name", "keywords", keywords);
    }

    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", ogImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    let canonical = document.head.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [description, image, keywords, path, title]);

  return null;
}
