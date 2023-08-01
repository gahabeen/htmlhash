import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.referralcandy\\.com/'),
    // in dom
    matchSelector(`iframe[src*='.referralcandy.com/'],li > a[href*='.referralcandy.com/'],div > a[href*='.referralcandy.com/'] `),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
