import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.(?:lr-ingest|logrocket)\\.(?:com|io)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'LogRocket._buffer'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
