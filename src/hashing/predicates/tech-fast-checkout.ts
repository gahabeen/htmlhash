import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js\\.fast\\.co/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FAST_VERSION'),
    matchRegexInInnerHTML('script', 'Fast.Events'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
