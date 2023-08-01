import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.ibdok\\.ir/'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'bdok', ''),
    // in scripts

    // in html

    // in text

    // in css
])
