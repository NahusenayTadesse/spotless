




import { db } from "$lib/server/db";
import { contactMessages } from "$lib/server/db/schema";

import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async () => {

            const messages = await db.select({
               id: contactMessages.id,
               name: contactMessages.name,
               phone: contactMessages.phone,
               email: contactMessages.email,
               date: contactMessages.createdAt,
               subject: contactMessages.subject

               
            }).from(contactMessages)
    
            
        
        return {
             messages
        }
}  


