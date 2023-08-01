import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'exhibit.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Exhibit'),
    matchRegexInInnerHTML('script', 'Exhibit.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
