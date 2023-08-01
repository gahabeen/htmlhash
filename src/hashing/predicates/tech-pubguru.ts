import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.pubguru\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'pg.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
