import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'addthis\\.com/js/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'addthis'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
