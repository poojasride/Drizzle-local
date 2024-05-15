import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

const campuses = sqliteTable("campus", {
  campus_id: integer("campus_id", { mode: "number" }).primaryKey({
    autoIncrement: true,
  }),
  name: text("name"),
  address: text("address"),
});

type Campus = typeof campuses.$inferInsert;
type NewCampus = typeof campuses.$inferInsert;

export { campuses, Campus, NewCampus };
