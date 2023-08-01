import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'www\\.datadoghq-browser-agent\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'DD_LOGS'),
    matchRegexInInnerHTML('script', 'DD_RUM'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
