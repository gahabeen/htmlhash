import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'zkau/'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<!-- ZK [.\\d\\s]+-->'),
    // in text

    // in css
])
