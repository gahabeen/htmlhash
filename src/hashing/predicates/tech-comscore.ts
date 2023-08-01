import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.scorecardresearch\\.com/beacon\\.js|COMSCORE\\.beacon'),
    // in dom
    matchSelector(`iframe[src*='.scorecardresearch.com/beacon'], iframe#comscore, iframe[src*='COMSCORE.beacon']`),
    // in js
    matchRegexInInnerHTML('script', 'COMSCORE'),
    matchRegexInInnerHTML('script', '_COMSCORE'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
