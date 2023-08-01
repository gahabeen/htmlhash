import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'online\\.flippingbook\\.com/'),
    // in dom
    matchSelector(`a[href*='flippingbook.com/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', '__flippingbook_csrf__'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
