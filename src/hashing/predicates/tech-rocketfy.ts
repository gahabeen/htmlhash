import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.rocketfy\\.mx/'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^Rocketfy\\sMaker\\s-\\sv([\\d\\.]+)$\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
