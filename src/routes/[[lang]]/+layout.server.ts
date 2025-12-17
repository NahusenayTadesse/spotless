import { loadFlash } from 'sveltekit-flash-message/server';

const LANG_COOKIE = 'app-lang';   // same key you will sync from localStorage
const DEFAULT     = 'en';

export const load = loadFlash(async ({ cookies, params }) => {


  const lang = cookies.get(LANG_COOKIE) ?? DEFAULT;


  return {
     lang
  }
    // 2. return it to +layout.svelte / +layout.ts
    //
});
