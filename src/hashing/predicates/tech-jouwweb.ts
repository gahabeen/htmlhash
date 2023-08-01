import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:cdn)?\\.(?:jwwb|jouwweb)\\.nl/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'JOUWWEB'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
