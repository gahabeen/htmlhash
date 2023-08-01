import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js/crownpeak\\.'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CrownPeakAutocomplete'),
    matchRegexInInnerHTML('script', 'CrownPeakSearch'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'crownpeak\\.net'),
    // in html

    // in text

    // in css
])
