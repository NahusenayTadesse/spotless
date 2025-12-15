import type { Handle } from '@sveltejs/kit';
import * as auth from '$lib/server/auth';

const handleAuth: Handle = async ({ event, resolve }) => {
	const sessionToken = event.cookies.get(auth.sessionCookieName);

	if (!sessionToken) {
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}

	const { session, user } = await auth.validateSessionToken(sessionToken);

	if (session) {
		auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
	} else {
		auth.deleteSessionTokenCookie(event);
	}

	event.locals.user = user;
	event.locals.session = session;
	return resolve(event);
};
import { redirect } from '@sveltejs/kit';
const DEFAULT = 'en';
const SUPPORTED = new Set(['en', 'am']);

const handleLang: Handle = async ({ event, resolve }) => {
	const { pathname } = event.url;

	/* let API and already-prefixed routes pass through */
	const maybeLang = pathname.split('/')[1];
	if (SUPPORTED.has(maybeLang)) return resolve(event);

	/* pick best language */
	const header = event.request.headers.get('accept-language') || '';
	const preferred = header
		.split(',')
		.map(l => l.split('-')[0])
		.find(l => SUPPORTED.has(l));

	const lang = preferred || DEFAULT;

	/* 307-redirect so the browser keeps the GET method */
	throw redirect(307, `/${lang}${pathname}`);
};
function sequence(...handlers: Handle[]): Handle {
	return handlers.reduce((prev, curr) => (args) => prev(args).then(curr));
}

export const handle: Handle = handleAuth;
