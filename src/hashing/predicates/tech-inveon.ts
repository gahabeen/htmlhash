import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'Scripts/_app/Inv(?:\\w+)\\.js\\?v=(.+)$\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'InvApp'),
    matchRegexInInnerHTML('script', 'invTagManagerParams'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
