export function extractPiralConfig(): { piral: string; feed: string } {
  const piralUrl = document
    .querySelector(`meta[name="piral"]`)
    ?.getAttribute("content");

  const feedName = document
    .querySelector(`meta[name="feed"]`)
    ?.getAttribute("content");

  if (!piralUrl || !feedName) {
    throw new Error("Piral configuration not found in meta tags");
  }

  return { piral: piralUrl, feed: feedName };
}
