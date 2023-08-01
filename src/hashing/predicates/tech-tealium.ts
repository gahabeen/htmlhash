import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^(?:https?:)?//tags\\.tiqcdn\\.com/'),
    matchRegexInAttribute('script', 'src', '/tealium/utag\\.js$'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'TEALIUMENABLED'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
