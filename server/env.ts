import dotenv from "dotenv";
import fs from "fs";
import path from "path";

export function loadEnv() {
  const root = path.resolve(import.meta.dirname, "..");
  const baseEnv = path.join(root, ".env");
  const mode = process.env.NODE_ENV || "development";
  const modeEnv = path.join(root, `.env.${mode}`);

  if (fs.existsSync(baseEnv)) {
    dotenv.config({ path: baseEnv, override: false });
  }
  if (fs.existsSync(modeEnv)) {
    dotenv.config({ path: modeEnv, override: true });
  }
}
