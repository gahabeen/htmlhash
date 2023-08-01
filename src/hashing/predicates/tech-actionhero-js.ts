import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'actionheroClient\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'actionheroClient'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
