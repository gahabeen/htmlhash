import { escapeRegExpValue } from './utils';

export const regexPattern = (pattern: string, flags: string = 'gim') => new RegExp(pattern, flags);

export const tagKeyPattern = (tag: string) => new RegExp(`<${tag}[^>]*>`, 'gim');
export const tagTextPattern = (tag: string, text: string, flags: string = 'gim') => new RegExp(`<${tag}[^>]*>[^<]*${escapeRegExpValue(text)}[^(<\/)]*<\/${tag}>`, flags);
export const tagKeyValuePattern = (tag: string, key: string, value: string) => new RegExp(`<${tag}[^>]*${escapeRegExpValue(key)}="${escapeRegExpValue(value)}"[^>]*>`, 'gim');
export const tagAttributesPattern = (tag: string, attributes: Record<string, string>) => new RegExp(`<${tag}${Object.entries(attributes).map(([key, value]) => `(?=[^>]*${escapeRegExpValue(key)}="${escapeRegExpValue(value)}"[^>]*)*`).join('')}>`, 'gim');
export const tagKeyLooseValuePattern = (tag: string, key: string, value: string) => new RegExp(`<${tag}[^>]*${escapeRegExpValue(key)}="[^>"]*${escapeRegExpValue(value)}[^>"]*"[^>]*>`, 'gim');
export const tagAttributesLoosePattern = (tag: string, attributes: Record<string, string>) => new RegExp(`<${tag}${Object.entries(attributes).map(([key, value]) => `(?=[^>]*${escapeRegExpValue(key)}="[^>"]*${escapeRegExpValue(value)}[^>"]*"[^>]*)*`).join('')}>`, 'gim');

export const metaKeyValuePattern = (key: string, value: string) => tagKeyValuePattern('meta', key, value);
export const metaKeyLooseValuePattern = (key: string, value: string) => tagKeyLooseValuePattern('meta', key, value);
export const metaAttributesPattern = (attributes: Record<string, string>) => tagAttributesPattern('meta', attributes);
export const metaAttributesLoosePattern = (attributes: Record<string, string>) => tagAttributesLoosePattern('meta', attributes);

export const linkKeyValuePattern = (key: string, value: string) => tagKeyValuePattern('link', key, value);
export const linkKeyLooseValuePattern = (key: string, value: string) => tagKeyLooseValuePattern('link', key, value);
export const linkAttributesPattern = (attributes: Record<string, string>) => tagAttributesPattern('link', attributes);
export const linkAttributesLoosePattern = (attributes: Record<string, string>) => tagAttributesLoosePattern('link', attributes);

export const divKeyValuePattern = (key: string, value: string) => tagKeyValuePattern('div', key, value);
export const divKeyLooseValuePattern = (key: string, value: string) => tagKeyLooseValuePattern('div', key, value);
export const divAttributesPattern = (attributes: Record<string, string>) => tagAttributesPattern('div', attributes);
export const divAttributesLoosePattern = (attributes: Record<string, string>) => tagAttributesLoosePattern('div', attributes);