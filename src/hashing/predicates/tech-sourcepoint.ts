import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`body.f_sourcepoint_ccpa_on`),
    // in js
    matchRegexInInnerHTML('script', 'tealium_sourcepoint'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'SOURCEPOINT_MMS_DOMAIN'),
    // in html

    // in text

    // in css
])
