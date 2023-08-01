import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'fundingchoicesmessages\\.google\\.com'),
    // in dom
    matchSelector(`.fc-consent-root, iframe[name='googlefcLoaded'], iframe[name='googlefcPresent'], .fc-dialog, .fc-choice-dialog`),
    // in js
    matchRegexInInnerHTML('script', '__googlefc'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
