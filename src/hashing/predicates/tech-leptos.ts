import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '__LEPTOS_PENDING_RESOURCES'),
    matchRegexInInnerHTML('script', '__LEPTOS_RESOLVED_RESOURCES'),
    matchRegexInInnerHTML('script', '__LEPTOS_RESOURCE_RESOLVERS'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'export function microtask\\(f\\)\\;confidence'),
    // in html
    matchRegex('<!--hk=_.*'),
    // in text

    // in css
])
