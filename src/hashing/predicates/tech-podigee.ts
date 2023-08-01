import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`iframe[src*='cdn.podigee.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'podigeePodcastPlayers'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
