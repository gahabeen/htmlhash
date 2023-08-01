import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.db-ip\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ENV.dbip'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
