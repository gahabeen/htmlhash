import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn(?:-themes)?\\.thinkific\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Thinkific'),
    matchRegexInInnerHTML('script', 'ThinkificAnalytics'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
