import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.bookero\\.pl'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'bookero_config'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
