import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.kameleoon\\.\\w+/kameleoon\\.js'),
    // in dom
    matchSelector(`link[href*='.kameleoon.eu/kameleoon.js']`),
    // in js
    matchRegexInInnerHTML('script', 'Kameleoon.Gatherer.SCRIPT_VERSION'),
    matchRegexInInnerHTML('script', 'kameleoonEndLoadTime'),
    matchRegexInInnerHTML('script', 'kameleoonS'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
