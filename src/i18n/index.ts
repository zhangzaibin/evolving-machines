import chinese from './zh.json';

export type Locale = 'en' | 'zh';
const messages: Record<string, string> = chinese;
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** Keep the deployment base, language prefix, and page path independent. */
export function localizedPath(path = '', locale: Locale = 'en') {
	return `${base}${locale === 'zh' ? 'zh/' : ''}${path.replace(/^\/+/, '')}`;
}

export function useLocale(url: URL) {
	const relative = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : '';
	const isZh = /^(?:zh)(?:\/|$)/.test(relative);
	const locale: Locale = isZh ? 'zh' : 'en';
	const page = relative.replace(/^zh(?:\/|$)/, '');
	return {
		locale,
		isZh,
		language: isZh ? 'zh-CN' : 'en',
		base: localizedPath('', locale),
		t: (text: string) => isZh ? messages[text] ?? text : text,
		to: (path: string) => localizedPath(path, locale),
		alternate: (target: Locale) => localizedPath(page, target),
	};
}

/** Translate authored article text and accessibility labels at build time.
 * Preserve the original figures, data, scripts, styles, and citation identifiers.
 */
export function localizeArticle(html: string) {
	const translate = (text: string) => {
		const key = text.trim();
		return messages[key] ? text.replace(key, messages[key]) : text;
	};
	return html.split(/(<(?:script|style|pre)\b[\s\S]*?<\/(?:script|style|pre)>)/gi)
		.map((part) => /^<(?:script|style|pre)\b/i.test(part) ? part : part
			.replace(/(^|>)([^<>]+)(?=<|$)/g, (_, prefix, text) => prefix + translate(text))
			.replace(/\b(aria-label|content)="([^"]*)"/g, (_, name, value) => `${name}="${translate(value)}"`))
		.join('');
}
