import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '_ishopevents'),
    matchRegexInInnerHTML('script', '_ishopevents_url'),
    matchRegexInInnerHTML('script', 'iShop.config.baseUrl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
