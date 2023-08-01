import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.helpdocs\\.io'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'HDAnalytics'),
    matchRegexInInnerHTML('script', 'HDUtils'),
    matchRegexInInnerHTML('script', 'hd_instant_search'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
