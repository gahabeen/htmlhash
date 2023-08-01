import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.yottaa\\.\\w+/'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'X-Yottaa-Metrics', ''),
    matchRegexInAttribute('meta', 'X-Yottaa-Optimizations', ''),
    // in scripts

    // in html

    // in text

    // in css
])
