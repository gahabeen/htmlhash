import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.metrilo\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'metrilo'),
    matchRegexInInnerHTML('script', 'metriloBotRegexp'),
    matchRegexInInnerHTML('script', 'metriloCookie'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
