require("dotenv").config();
const express = require("express");
const app = express();

const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.SHOGUN_API_KEY });
const clientId = process.env.OAUTH_CLIENT_ID;
const clientSecret = process.env.OAUTH_CLIENT_SECRET;
const redirectUri = process.env.NOTION_AUTH_URL;
const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

app.use(express.json());
