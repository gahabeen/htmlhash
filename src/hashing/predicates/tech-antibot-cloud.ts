import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/antibot8/static/peel\\.js'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'AntiBot\\.Cloud\\sv\\.\\s([\\d\\.]+)\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
