import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'TypechoComment'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Typecho( [\\d.]+)?\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
