import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'player\\.aniview\\.com/script/([\\d\\.]+)/\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='player.aniview.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
