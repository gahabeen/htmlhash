import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js\\.klevu\\.\\w+/klevu-js-v([\\d.]+)\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'klevu.version'),
    matchRegexInInnerHTML('script', 'klevu_apiKey'),
    matchRegexInInnerHTML('script', 'klevu_layout'),
    matchRegexInInnerHTML('script', 'klevu_sessionId'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
