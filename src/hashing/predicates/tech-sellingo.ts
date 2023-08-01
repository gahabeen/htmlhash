import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='sellingo.pl'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'sellingoQuantityCalc'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
