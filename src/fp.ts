import { Predicate } from './types';

export const matchAny = (snippets: (string | RegExp)[]) => (html: string) => {
  return snippets.some((snippet) => !!html.match(snippet));
}

export const matchAll = (snippets: (string | RegExp)[]) => (html: string) => {
  return snippets.every((snippet) => !!html.match(snippet));
}

export const anyOf = (predicates: Predicate[]) => (html: string) => {
  return predicates.some((predicate) => predicate(html));
}