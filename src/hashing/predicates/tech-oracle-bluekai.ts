import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'tags\\.(?:bluekai|bkrtx)\\.com/'),
    // in dom
    matchSelector(`link[href*='tags.bluekai.com'],link[href*='tags.bkrtx.com']`),
    // in js
    matchRegexInInnerHTML('script', 'bluekaiLoaded'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
