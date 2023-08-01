import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'userapp\\.zyrosite\\.com/'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Hostinger Website Builder'),
    // in scripts

    // in html

    // in text

    // in css
])
