import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'msecnd\\.net/api/beYableJSv(\\d+)\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BEYABLE'),
    matchRegexInInnerHTML('script', 'beYableDomain'),
    matchRegexInInnerHTML('script', 'beYableKey'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
