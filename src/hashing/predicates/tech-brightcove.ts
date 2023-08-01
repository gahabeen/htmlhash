import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`iframe[src*='players.brightcove.'], link[href*='players.brightcove.']`),
    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'players\\.brightcove\\.net/'),
    // in html

    // in text

    // in css
])
