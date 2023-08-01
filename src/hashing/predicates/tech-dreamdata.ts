import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.bizible\\.com/'),
    // in dom
    matchSelector(`link[href*='.bizible.com']`),
    // in js
    matchRegexInInnerHTML('script', 'BizTrackingA'),
    matchRegexInInnerHTML('script', 'Bizible'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
