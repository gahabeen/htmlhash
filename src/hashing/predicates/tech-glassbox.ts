import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.glassboxcdn\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SessionCamRecorder'),
    matchRegexInInnerHTML('script', 'sessioncamConfiguration'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
