import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'apps\\.bazaarvoice\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BV.api'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
