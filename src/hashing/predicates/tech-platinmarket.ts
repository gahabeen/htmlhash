import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//platincdn\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PlatinMarket'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
