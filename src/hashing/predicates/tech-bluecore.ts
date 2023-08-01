import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.bluecore\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_bluecoreTrack'),
    matchRegexInInnerHTML('script', 'bluecore_action_trigger'),
    matchRegexInInnerHTML('script', 'triggermail'),
    matchRegexInInnerHTML('script', 'triggermail_email_address'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
