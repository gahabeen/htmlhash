import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.trackjs\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'TrackJs'),
    matchRegexInInnerHTML('script', 'trackJs'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
