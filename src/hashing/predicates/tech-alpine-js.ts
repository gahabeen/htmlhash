import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/alpine(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Alpine.version'),
    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]+[^\\w-]x-data[^\\w-][^<]+\\;confidence'),
    // in text

    // in css
])
