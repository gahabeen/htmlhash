import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'tdesign\\.gtimg\\.com/'),
    // in dom
    matchSelector(`.t-button__text, .t-layout`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
