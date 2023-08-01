import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'trustspot\\.io'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'trustspot_key'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
