import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { campuses, NewCampus } from "./db/schema.js";
import { app } from "./drizzle.config.js";

const sqlite = new Database("./db/campus.db");
const db = drizzle(sqlite);

await addCampus({
  name: "Campus 1",
  address: "Chennai",
});

async function addCampus(campus: NewCampus): Promise<void> {
  await db.insert(campuses).values(campus);
}

async function getCampus(): Promise<any[]> {
  return await db
    .select({
      campus_id: campuses.campus_id,
      name: campuses.name,
      address: campuses.address,
    })
    .from(campuses);
}

// routes
app.get("/campus", async (res) => {
  const allCampuses = await getCampus();
  console.log(allCampuses);
  return res.json({
    allCampuses,
  });
});
