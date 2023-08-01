import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'lift\\.acquia\\.com'),
    // in dom
    matchSelector(`[data-lift-slot]`),
    // in js
    matchRegexInInnerHTML('script', 'AcquiaLift'),
    matchRegexInInnerHTML('script', '_tcaq'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
