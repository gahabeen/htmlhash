import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.ex\\.co'),
    matchRegexInAttribute('script', 'src', '\\.playbuzz\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__EXCO'),
    matchRegexInInnerHTML('script', '__EXCO_INTEGRATION_TYPE'),
    matchRegexInInnerHTML('script', 'excoPixelUrl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
