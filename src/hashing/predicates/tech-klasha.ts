import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'klasha-integration\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'KlashaClient'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
