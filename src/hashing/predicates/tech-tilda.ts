import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'tilda(?:cdn|\\.ws|-blocks)'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]* href=[^>]+tilda(?:cdn|\\.ws|-blocks)'),
    // in text

    // in css
])
