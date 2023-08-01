import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/npm/@accessible360/accessible-slick@([\\d\\.]+)/\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '/accessible360/accessible-slick/slick/slick\\.min\\.js\\?v=([\\d\\.]+)\\;version:\\1'),
    // in dom
    matchSelector(`a[href*='accessible360.com/'][target='_blank'], a[href*='accessible360.com/'] > img`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
