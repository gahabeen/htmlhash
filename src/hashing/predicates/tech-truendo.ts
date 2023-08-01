import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.priv\\.center/'),
    matchRegexInAttribute('script', 'src', 'cdn\\.truendo\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Truendo'),
    matchRegexInInnerHTML('script', 'TruendoCookieControlCallback'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
