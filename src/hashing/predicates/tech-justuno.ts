import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'my\\.jst\\.ai'),
    matchRegexInAttribute('script', 'src', 'cdn\\.justuno\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'JustunoApp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
