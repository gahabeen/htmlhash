import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.sublimevideo\\.net/js/[a-z\\d]+\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'sublimevideo'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
