import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.convertri\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CONVERTRI_CONSTANTS'),
    matchRegexInInnerHTML('script', 'ConvertriAnalytics'),
    matchRegexInInnerHTML('script', 'convertriParameters'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
