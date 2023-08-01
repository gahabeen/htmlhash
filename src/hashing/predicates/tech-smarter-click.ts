import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.?smct\\.(?:io|co)/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '$smcInstall'),
    matchRegexInInnerHTML('script', '$smcT5'),
    matchRegexInInnerHTML('script', '$smctData'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
