import {env} from "@/app/data/env/server";
import {defineConfig} from 'drizzle-kit';

export default defineConfig({
    schema: "./app/drizzle/schema.ts",
    out: "./app/drizzle/migrations",
    dialect: "postgresql",
    strict: true,
    verbose: true,
    dbCredentials: {
      url: env.DATABASE_URL,
    },
  })