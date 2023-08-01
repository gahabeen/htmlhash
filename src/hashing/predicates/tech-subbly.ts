import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'static\\.subbly\\.me/assets/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'subblyProductUrlBase'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^Subbly$'),
    // in scripts

    // in html

    // in text

    // in css
])
