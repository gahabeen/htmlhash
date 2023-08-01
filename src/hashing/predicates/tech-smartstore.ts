import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^Smart[sS]tore(.NET)? (.+)$\\;version:\\2'),
    // in scripts

    // in html
    matchRegex('<!--Powered by Smart[sS]tore'),
    matchRegex('<meta property="sm:pagedata"'),
    // in text

    // in css
])
