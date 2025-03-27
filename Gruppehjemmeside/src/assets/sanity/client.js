import SanityClientConstructor from "@sanity/client";

export const client = SanityClientConstructor({
  projectId: "xemrmcax",
  dataset: "production",
  apiVersion: "v2025-03-27",
  useCdn: false,
});