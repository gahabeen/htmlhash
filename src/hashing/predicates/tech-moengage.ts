import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.moengage\\.\\w+'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MOENGAGE_API_KEY'),
    matchRegexInInnerHTML('script', 'Moengage'),
    matchRegexInInnerHTML('script', 'downloadMoengage'),
    matchRegexInInnerHTML('script', 'moengage_object'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
