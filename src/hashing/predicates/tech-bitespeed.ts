import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.bitespeed\\.co/'),
    // in dom

    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'app\\.bitespeed\\.co/'),
    // in html

    // in text

    // in css
])
