import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'call\\.chatra\\.io/chatra\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ChatraID'),
    matchRegexInInnerHTML('script', 'ChatraSetup'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
