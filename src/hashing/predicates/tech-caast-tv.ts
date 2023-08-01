import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.caast\\.tv/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'caast.open'),
    matchRegexInInnerHTML('script', 'caastInstance'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
