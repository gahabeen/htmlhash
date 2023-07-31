import { escapeRegExpValue } from './utils';

export const regexPattern = (pattern: string, flags: string = 'gim') => new RegExp(pattern, flags);

export const tagPattern = (tag: string, flags: string = 'gim') => new RegExp(`<${tag}[^>]*>`, flags);

export const tagKeyPattern = (tag: string, key: string, flags: string = 'gim') => new RegExp(`<${tag}((?=[^>]*${escapeRegExpValue(key)}(?=\s|>))|(?=[^>]*${escapeRegExpValue(key)}="[^>"]*))+`, flags);
// export const tagKeyPattern = (tag: string, key: string, flags: string = 'gim') => new RegExp(`<${tag}[^>]*${escapeRegExpValue(key)}(=|\s){1}[^>]*>`, flags);
export const keyPattern = (key: string, flags: string = 'gim') => tagKeyPattern('', key, flags);
export const tagTextPattern = (tag: string, text: string, flags: string = 'gim') => new RegExp(`<${tag}[^>]*>[^<]*${escapeRegExpValue(text)}[^(<\/)]*<\/${tag}>`, flags);
export const tagKeyValuePattern = (tag: string, key: string, value: string, flags: string = 'gim') => new RegExp(`<${tag}[^>]*${escapeRegExpValue(key)}="${escapeRegExpValue(value)}"[^>]*>`, flags);
export const tagAttributesPattern = (tag: string, attributes: Record<string, string>, flags: string = 'gim') => new RegExp(`<${tag}(${Object.entries(attributes).map(([key, value]) => `(?=[^>]*${escapeRegExpValue(key)}="${escapeRegExpValue(value)}"[^>]*)`).join('|')})+>`, flags);
export const tagKeyLooseValuePattern = (tag: string, key: string, value: string, flags: string = 'gim') => new RegExp(`<${tag}[^>]*${escapeRegExpValue(key)}="[^>"]*${escapeRegExpValue(value)}[^>"]*"[^>]*>`, flags);
export const tagAttributesLoosePattern = (tag: string, attributes: Record<string, string>, flags: string = 'gim') => new RegExp(`<${tag}(${Object.entries(attributes).map(([key, value]) => `(?=[^>]*${escapeRegExpValue(key)}="[^>"]*${escapeRegExpValue(value)}[^>"]*"[^>]*)`).join('|')})+>`, flags);

export const metaKeyValuePattern = (key: string, value: string, flags: string = 'gim') => tagKeyValuePattern('meta', key, value, flags);
export const metaKeyLooseValuePattern = (key: string, value: string, flags: string = 'gim') => tagKeyLooseValuePattern('meta', key, value, flags);
export const metaAttributesPattern = (attributes: Record<string, string>, flags: string = 'gim') => tagAttributesPattern('meta', attributes, flags);
export const metaAttributesLoosePattern = (attributes: Record<string, string>, flags: string = 'gim') => tagAttributesLoosePattern('meta', attributes, flags);

export const linkKeyValuePattern = (key: string, value: string, flags: string = 'gim') => tagKeyValuePattern('link', key, value, flags);
export const linkKeyLooseValuePattern = (key: string, value: string, flags: string = 'gim') => tagKeyLooseValuePattern('link', key, value, flags);
export const linkAttributesPattern = (attributes: Record<string, string>, flags: string = 'gim') => tagAttributesPattern('link', attributes, flags);
export const linkAttributesLoosePattern = (attributes: Record<string, string>, flags: string = 'gim') => tagAttributesLoosePattern('link', attributes, flags);

export const divKeyValuePattern = (key: string, value: string, flags: string = 'gim') => tagKeyValuePattern('div', key, value, flags);
export const divKeyLooseValuePattern = (key: string, value: string, flags: string = 'gim') => tagKeyLooseValuePattern('div', key, value, flags);
export const divAttributesPattern = (attributes: Record<string, string>, flags: string = 'gim') => tagAttributesPattern('div', attributes, flags);
export const divAttributesLoosePattern = (attributes: Record<string, string>, flags: string = 'gim') => tagAttributesLoosePattern('div', attributes, flags);

export const attributesPattern = (attributes: Record<string, string>, flags: string = 'gim') => tagAttributesPattern('', attributes, flags);
export const attributesLoosePattern = (attributes: Record<string, string>, flags: string = 'gim') => tagAttributesLoosePattern('', attributes, flags);