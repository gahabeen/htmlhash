import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.tryinteract\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'InteractApp.name'),
    matchRegexInInnerHTML('script', 'InteractPromotionObject'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
