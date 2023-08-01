import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'app\\.raychat\\.io/scripts/js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Raychat'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
