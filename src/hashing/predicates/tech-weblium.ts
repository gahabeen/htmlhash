import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'res2\\.weblium\\.site/common/core\\.min\\.js'),
    // in dom
    matchSelector(`link[href*='res2.weblium.site']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
