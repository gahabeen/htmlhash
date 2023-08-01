import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
    matchRegex('--nextui-(?:colors-accents1|colors-text|space-0|fonts-sans|fonts-mono)'),
])
