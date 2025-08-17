export function extractPiralConfigFromDOM(): {
  feedServiceUrl: string;
  feed: string;
} {
  const feedServiceUrl = document
    .querySelector(`meta[name="piral"]`)
    ?.getAttribute("content");

  const feed = document
    .querySelector(`meta[name="feed"]`)
    ?.getAttribute("content");

  if (!feedServiceUrl || !feed) {
    throw new Error("Piral configuration not found in meta tags");
  }

  return { feedServiceUrl, feed };
}
