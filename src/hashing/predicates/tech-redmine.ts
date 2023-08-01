import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'description', 'Redmine'),
    // in scripts

    // in html
    matchRegex('Powered by <a href="[^>]+Redmine'),
    // in text

    // in css
])
