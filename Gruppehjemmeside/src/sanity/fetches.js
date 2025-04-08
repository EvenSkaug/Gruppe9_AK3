import { client } from "./client";

export async function fetchAllMembers() {
    const data = await client.fetch(
      `*[_type == "members"] {_id, name,  image{asset ->{ _id, url }}, email, description, worklog[] { date, description, _key }}`
    );
    return data;
  }

  export async function fetchAllWorklogs() {
    const data = await client.fetch(
      `*[_type == "members"].worklog[]{
        date,
        description,
        _key
        } | order(date desc)`
    );
    return data;
  }