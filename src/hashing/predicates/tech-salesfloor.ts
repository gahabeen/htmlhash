import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.salesfloor\\.net/'),
    // in dom
    matchSelector(`iframe[src*='.salesfloor.net'], div[data-siterefer='salesfloor']`),
    // in js
    matchRegexInInnerHTML('script', 'NMConfig.SALESFLOOR_ENV'),
    matchRegexInInnerHTML('script', 'salesFloorHost'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
