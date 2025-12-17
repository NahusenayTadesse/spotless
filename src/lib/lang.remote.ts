import { query } from '$app/server';
import { browser } from '$app/environment';
const LANG_COOKIE = 'app-lang';   // same key you will sync from localStorage
const DEFAULT     = 'en';


export const getLang = query(async() => {
  const COOKIE_KEY = 'app-lang';
   const DEFAULT    = 'en' ;

   /* 1️⃣  reactive source of truth  */

 let lang = DEFAULT
  if(browser) {
      lang = localStorage.getItem(COOKIE_KEY);
  }
  let test = 'test'

   return {
     lang,
     test
   };
});
