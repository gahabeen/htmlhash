import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.affilio.ir/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'Affilio.widget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
