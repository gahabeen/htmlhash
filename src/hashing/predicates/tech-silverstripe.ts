import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^SilverStripe'),
    // in scripts

    // in html
    matchRegex('Powered by <a href="[^>]+SilverStripe'),
    // in text

    // in css
])
