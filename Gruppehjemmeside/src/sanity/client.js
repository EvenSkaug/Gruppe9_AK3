import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "xemrmcax",
  dataset: "production",
  apiVersion: "v2025-03-27",
  useCdn: false,
});