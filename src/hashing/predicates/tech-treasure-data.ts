import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.treasuredata\\.com/'),
    // in dom
    matchSelector(`link[href*='.treasuredata.com']`),
    // in js
    matchRegexInInnerHTML('script', 'Treasure.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
