import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^/\\+\\+resource\\+\\+'),
    // in dom
    matchSelector(`link[href^='/++resource++']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Plone'),
    // in scripts

    // in html

    // in text

    // in css
])
