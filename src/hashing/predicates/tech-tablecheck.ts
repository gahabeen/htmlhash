import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'tc_widget\\.js'),
    // in dom
    matchSelector(`form[action*='tablecheck']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
