import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'tag.demandbase.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Demandbase'),
    matchRegexInInnerHTML('script', 'Demandbase.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
