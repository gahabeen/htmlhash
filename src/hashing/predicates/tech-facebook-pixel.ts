import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'connect\\.facebook.\\w+/signals/config/\\d+\\?v=([\\d\\.]+)\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'connect\\.facebook\\.\\w+/.+/fbevents\\.js'),
    // in dom
    matchSelector(`img[src*='facebook.com/tr']`),
    // in js
    matchRegexInInnerHTML('script', '_fbq'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
