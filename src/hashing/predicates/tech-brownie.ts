import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'assets\\.youthsrl\\.com/brownie'),
    // in dom
    matchSelector(`a[href*='browniesuite.com'][target='_blank'] img[src*='brownie']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
