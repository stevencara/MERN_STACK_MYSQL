import { createPool } from "mysql2/promise";
import {
  MYSQL_ADDON_HOST,
  MYSQL_ADDON_USER,
  MYSQL_ADDON_PASSWORD,
  MYSQL_ADDON_DB,
  MYSQL_ADDON_PORT,
  MYSQL_ADDON_URI
} from "./config.js";

export const pool = new createPool({
  host: MYSQL_ADDON_HOST,
  port: MYSQL_ADDON_PORT,
  user: MYSQL_ADDON_USER,
  password: MYSQL_ADDON_PASSWORD,
  database: MYSQL_ADDON_DB,
  uri: MYSQL_ADDON_URI,
});
