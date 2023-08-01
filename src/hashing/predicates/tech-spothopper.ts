import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'static\\.spotapps\\.co/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Spothopper'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
