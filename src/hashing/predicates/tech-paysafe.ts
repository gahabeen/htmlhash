import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/hosted\\.paysafe\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'paysafe'),
    matchRegexInInnerHTML('script', 'paysafe.checkout'),
    matchRegexInInnerHTML('script', 'paysafe.fields'),
    matchRegexInInnerHTML('script', 'paysafe.threedsecure'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
