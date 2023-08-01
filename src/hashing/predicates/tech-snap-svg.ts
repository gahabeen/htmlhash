import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'snap\\.svg(?:-min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Snap.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
