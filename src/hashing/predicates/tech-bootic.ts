import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Bootic.assetsHost'),
    // in meta
    matchRegexInAttribute('meta', 'autor', '^Bootic$'),
    // in scripts

    // in html

    // in text

    // in css
])
