import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'sfDataIntell'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^Sitefinity\\s([\\S]{3,9})\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
