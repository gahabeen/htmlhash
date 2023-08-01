import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='bsdk.api.ditto.com']`),
    // in js
    matchRegexInInnerHTML('script', 'Ditto.__esModule'),
    matchRegexInInnerHTML('script', 'dittoIdLifetime'),
    matchRegexInInnerHTML('script', 'globalDittoKey'),
    matchRegexInInnerHTML('script', 'globalDittoServer'),
    matchRegexInInnerHTML('script', 'jstextmap.DittoSdkUrl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
