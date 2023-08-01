import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'asset(?:cdn)?\\.freshop\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'freshop'),
    matchRegexInInnerHTML('script', 'freshopInitialized'),
    // in meta
    matchRegexInAttribute('meta', 'author', '^Freshop, Inc\\.$'),
    // in scripts

    // in html

    // in text

    // in css
])
