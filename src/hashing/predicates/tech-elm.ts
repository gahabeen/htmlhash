import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Elm.Main.embed'),
    matchRegexInInnerHTML('script', 'Elm.Main.init'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])