import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js/prediggo/(?:[\\w]+)\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Prediggo'),
    matchRegexInInnerHTML('script', 'PrediggoSearchFormExternalAc'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
