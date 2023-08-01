import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.prepr\\.io/'),
    // in dom
    matchSelector(`img[src*='.prepr.io/']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'prepr:id', ''),
    // in scripts

    // in html

    // in text

    // in css
])
