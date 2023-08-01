import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'promoApi'),
    matchRegexInInnerHTML('script', 'promoDomain'),
    matchRegexInInnerHTML('script', 'promoIsOver'),
    matchRegexInInnerHTML('script', 'promoStart'),
    // in meta

    // in scripts

    // in html
    matchRegex('<!-- made with https://promobuilding\\.ru'),
    // in text

    // in css
])
