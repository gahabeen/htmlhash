import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'apps\\.mydukaan\\.io/'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'apple-mobile-web-app-title', '^MyDukaan$'),
    // in scripts

    // in html

    // in text

    // in css
])
