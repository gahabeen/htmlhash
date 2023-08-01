import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/demandware\\.static/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'dwAnalytics'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
