CREATE SCHEMA "app";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "app"."notes" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text,
	"author" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "app"."users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"first_name" text,
	"surname" text,
	"age" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "app"."notes" ADD CONSTRAINT "notes_author_users_id_fk" FOREIGN KEY ("author") REFERENCES "app"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
