import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.broadstreetads\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'broadstreet'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
