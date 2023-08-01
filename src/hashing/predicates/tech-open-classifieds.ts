import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'author', 'open-classifieds\\.com'),
    matchRegexInAttribute('meta', 'copyright', 'Open Classifieds ?([0-9.]+)?\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
