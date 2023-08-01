import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^Saber v([\\d.]+)$\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('<div [^>]*id="_saber"'),
    // in text

    // in css
])
