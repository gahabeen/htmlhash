import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'service\\.force\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'embedded_svc'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
