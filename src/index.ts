import { config } from "dotenv";
import generator, { Entity, Response } from "megalodon";
config();

const client = generator("mastodon", process.env.BASE_URL, process.env.ACCESS_TOKEN);