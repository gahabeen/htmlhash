import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.firstpromoter\\.com/'),
    // in dom
    matchSelector(`link[href*='//firstpromoter.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'FirstPromoterAPI'),
    matchRegexInInnerHTML('script', 'fprom_obj_'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
