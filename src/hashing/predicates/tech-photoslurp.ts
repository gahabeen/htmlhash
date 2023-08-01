import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Photoslurp'),
    matchRegexInInnerHTML('script', 'photoSlurpWidgetSettings'),
    matchRegexInInnerHTML('script', 'photoslurp_script'),
    matchRegexInInnerHTML('script', 'photoslurp_wdgts'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
