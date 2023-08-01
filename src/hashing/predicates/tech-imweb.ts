import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'vendor-cdn\\.imweb\\.me/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'IMWEB_TEMPLATE'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
