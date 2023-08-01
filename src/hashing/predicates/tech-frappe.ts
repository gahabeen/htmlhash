import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'frappe.avatar'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^frappe$'),
    // in scripts

    // in html

    // in text

    // in css
])
