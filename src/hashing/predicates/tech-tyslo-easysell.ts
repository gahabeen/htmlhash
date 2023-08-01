import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'openTysloForm'),
    matchRegexInInnerHTML('script', 'tysloApplyDiscount'),
    matchRegexInInnerHTML('script', 'tysloConfigVersion'),
    matchRegexInInnerHTML('script', 'tysloEasysellConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
