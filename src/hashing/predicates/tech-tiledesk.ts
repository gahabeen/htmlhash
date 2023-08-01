import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Tiledesk'),
    matchRegexInInnerHTML('script', 'tileDeskAsyncInit'),
    matchRegexInInnerHTML('script', 'tiledesk'),
    matchRegexInInnerHTML('script', 'tiledeskSettings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
