import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:cdn)?x\\.ai/.*/xdotai-embed\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'xdotaiAction'),
    matchRegexInInnerHTML('script', 'xdotaiButton'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
