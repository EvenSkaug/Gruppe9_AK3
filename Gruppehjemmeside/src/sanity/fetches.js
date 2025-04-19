import { client } from "./client";

  // Fetcher alle medlemmer, og nødvendige verdier
  export async function fetchAllMembers() {
    const data = await client.fetch(
      `*[_type == "members"]{_id, name, navname, image{asset ->{ _id, url }}, email, description, "slug" : slug.current, worklog[] { date, description, _key }}`
    );
    return data;
  }

  // Fetcher medlem på slug, og nødvendige verdier
  export async function fetchMemberBySlug(slug) {
    const data = await client.fetch(
      `*[_type == "members" && slug.current == "${slug}"]{_id, name, image { asset -> { _id, url } }, email, interests, description, "slug" : slug.current, worklog[] { date, description, _key }}`
    );
    return data;
  }

  // Fetcher alle arbeidslogger
  export async function fetchAllWorkLogs() {
    const data = await client.fetch(
      `*[_type == "members"].worklog[]{date, description, _key} | order(date desc)`
    );
    return data;
  }

  // Fetcher arbeidslogg per medlem på slug
  export async function fetchWorkLogsByMember(memberSlug) {
    const data = await client.fetch(
      `*[_type == "members" && slug.current == "${memberSlug}"]{worklog[]{date, description, _key}}[0].worklog | order(date desc)`
    );
    return data;
  }