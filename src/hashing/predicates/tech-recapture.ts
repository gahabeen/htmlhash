import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.recapture\\.io/.+\\?v=\\d+(?:&ver=([\\d\\.]+)?)?\\;version:\\1'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
