import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<a href="https://www.intercom.com/intercom-link[^"]+solution=customer-support[^>]+>We run on Intercom'),
    // in text

    // in css
])
