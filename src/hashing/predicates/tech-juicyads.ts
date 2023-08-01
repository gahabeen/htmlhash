import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'adsbyjuicy'),
    // in meta
    matchRegexInAttribute('meta', 'juicyads-site-verification', ''),
    // in scripts

    // in html

    // in text

    // in css
])
