import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js/convio/modules\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BLACKBAUD'),
    matchRegexInInnerHTML('script', 'don_premium_map'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
