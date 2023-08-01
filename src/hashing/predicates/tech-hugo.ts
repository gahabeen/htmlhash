import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='hugo.']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Hugo ([\\d.]+)?\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
