import { Relation, relations } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  uuid,
  boolean,
  integer,
} from "drizzle-orm/pg-core";
import { Children } from "react";


export const files = pgTable("files",{
    id:uuid("id").defaultRandom().primaryKey(),

    // basicfile and folder
    name:text("name").notNull(),
    path:text("path").notNull(),
    size:integer("size").notNull(),
    type:text("type").notNull(), // floder hardcoded


    // storage information
    fileurl:text("fileurl"),
    thumbnailUrl:text("thumbnailUrl"),

    // have parent
    userId:text("userId").notNull(),
    parentId:uuid("parentId"),


    // feature
    isFolder:boolean('is_folder').default(false).notNull(),
    isStarred:boolean('is_starred').default(false).notNull(),
    isTrash:boolean('is_trash').default(false).notNull(),
    
   createAt:timestamp("createAt").defaultNow().notNull(),
     updatedAt:timestamp("updatedAt").defaultNow().notNull(),

    

})




export  const fileRelations=relations(files,({one,many})=>(
    {
     
     parent: one(files, {
    fields: [files.parentId], // The foreign key in this table
    references: [files.id], // The primary key in the parent table
  }),
     children:many(files)
    }
))

// typesdefination
export const File=typeof files.$inferSelect;
export const newFile=typeof files.$inferInsert;