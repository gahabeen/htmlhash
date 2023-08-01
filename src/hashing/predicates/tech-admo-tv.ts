import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.admo.tv'], a[href*='.admo.tv'][target='_blank'], iframe[src*='.admo.tv/']`),
    // in js
    matchRegexInInnerHTML('script', 'ADMO_TT'),
    matchRegexInInnerHTML('script', 'ADMO_config'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
