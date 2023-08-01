import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='/wcsstore/'], link[href*='webapp/wcs/'], a[href*='/wcsstore/'], a[href*='webapp/wcs/'], script[src*='/wcsstore/'], script[src*='webapp/wcs/']`),
    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '/webapp/wcs/'),
    // in html

    // in text

    // in css
])
