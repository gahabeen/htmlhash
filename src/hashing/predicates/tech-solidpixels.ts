import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^https?://cdn\\.solidpixels\\.net/'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'web_author', '^solidpixels'),
    // in scripts

    // in html

    // in text

    // in css
])
