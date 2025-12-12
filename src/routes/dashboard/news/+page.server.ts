




import { db } from "$lib/server/db";
import { news, newsCategories } from "$lib/server/db/schema";

import { eq } from 'drizzle-orm'
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {

            const messages = await db.select({
               id: news.id,
               category: newsCategories.name,
               title: news.title,
               summary: news.summary,
               content: news.content,
               date: news.publishedAt,
               views: news.views
            
             

               
            }).from(news)
            .leftJoin(newsCategories, eq(news.category, newsCategories.id))
    
            
        
        return {
             messages
        }
}  


