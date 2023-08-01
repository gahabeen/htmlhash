import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.supporthero.io/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'supportHeroWidget'),
    matchRegexInInnerHTML('script', 'supporthero'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
