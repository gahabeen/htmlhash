import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//trinitymedia\\.ai/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'TRINITY_DISPLAY'),
    matchRegexInInnerHTML('script', 'TRINITY_PLAYER'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
