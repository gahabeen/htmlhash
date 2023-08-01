import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='.kooomo-cloud.com']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Kooomo(?: v([\\d.]+))?\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
