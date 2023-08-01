import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'munchkin\\.marketo\\.\\w+/(?:([\\d.]+)/)?munchkin\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Munchkin'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
