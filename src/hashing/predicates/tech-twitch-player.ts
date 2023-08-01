import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`iframe[src*='player\.twitch\.tv']`),
    // in js
    matchRegexInInnerHTML('script', 'Twitch.Player'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
