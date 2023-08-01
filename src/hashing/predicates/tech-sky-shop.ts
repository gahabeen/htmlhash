import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`.skyshop-container`),
    // in js
    matchRegexInInnerHTML('script', 'L.CONTINUE_SHOPPING'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Sky-Shop'),
    // in scripts

    // in html

    // in text

    // in css
])
