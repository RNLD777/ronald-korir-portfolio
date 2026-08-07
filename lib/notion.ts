import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const DATABASES = {
  writing: "c8de97593cd34066951bfcab24c901e6",
};