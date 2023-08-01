import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'Divi/js/custom\\.(?:min|unified)\\.js\\?ver=([\\d.]+)\\;version:\\1'),
    // in dom
    matchSelector(`style#divi-style-parent-inline-inline-css`),
    // in js
    matchRegexInInnerHTML('script', 'DIVI'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Divi(?:\\sv\\.([\\d\\.]+))?\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
