import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.bamboohr\\.com/'),
    // in dom
    matchSelector(`a[href*='.bamboohr.com/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'scrollToBambooHR'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
