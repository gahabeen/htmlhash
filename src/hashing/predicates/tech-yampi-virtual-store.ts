import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.yampi\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Yampi.api_domain'),
    matchRegexInInnerHTML('script', 'Yampi.cart_token'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
