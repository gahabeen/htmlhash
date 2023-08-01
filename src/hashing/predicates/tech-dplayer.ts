import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/dplayer\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'DPlayer'),
    matchRegexInInnerHTML('script', 'DPlayer.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
