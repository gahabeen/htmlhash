import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SabavisionElement'),
    matchRegexInInnerHTML('script', '__SABAVISION_GET_ADD_TIMEOUT'),
    matchRegexInInnerHTML('script', 'sabaVisionWebsiteID'),
    matchRegexInInnerHTML('script', 'sabaVisionWebsitePage'),
    // in meta
    matchRegexInAttribute('meta', 'sabavision_zone', ''),
    // in scripts

    // in html

    // in text

    // in css
])
