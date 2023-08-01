import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//systeme\\.io/'),
    // in dom
    matchSelector(`from[action*='//systeme.io/'], a[href*='//systeme.io/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
