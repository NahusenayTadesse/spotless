import { loadFlash } from 'sveltekit-flash-message/server';

export const load = loadFlash(async ({ params }) => {



   return { lang: params.lang || 'en' };

});
