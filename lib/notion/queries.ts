import { notion } from "./client";
import { DATABASES } from "./databases";

export async function getWriting() {
  const response = await notion.databases.query({
    database_id: DATABASES.writing,
  });

  return response.results;
}