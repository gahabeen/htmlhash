import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CFAppDomain'),
    matchRegexInInnerHTML('script', 'CFSurveyParticipantID'),
    matchRegexInInnerHTML('script', 'ClickFunnels'),
    matchRegexInInnerHTML('script', 'cfAddPolyfill'),
    // in meta
    matchRegexInAttribute('meta', 'cf:app_domain:', 'app\\.clickfunnels\\.com'),
    // in scripts

    // in html

    // in text

    // in css
])
