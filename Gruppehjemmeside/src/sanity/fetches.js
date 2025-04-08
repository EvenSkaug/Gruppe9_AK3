import { client } from "./client";

export async function fetchAllMembers() {
    const data = await client.fetch(
      `*[_type == "members"] {_id, name,  image{asset ->{ _id, url }}, email, description, "slug" : slug.current, worklog[] { date, description, _key }}`
    );
    return data;
  }

  export async function fetchAllWorklogs() {
    const data = await client.fetch(
      `*[_type == "members"].worklog[]{date, description, _key} | order(date desc)`
    );
    return data;
  }

  export async function fetchAllWorkLogs(memberId) {
    const query = memberId 
    ? `*[_type == "members" && _id == "${memberId}"]{worklog[]{date, description, _key}}[0].worklog | order(date desc)`
    : `*[_type == "members"].worklog[]{date, description, _key} | order(date desc)`;
    
    const data = await client.fetch(query);
    return data;
  }