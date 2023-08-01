import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.getresponse\\.com/'),
    // in dom
    matchSelector(`form[action*='.getresponse.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'GRAPP'),
    matchRegexInInnerHTML('script', 'GRWF2'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
