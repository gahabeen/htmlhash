import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^FlexCMP'),
    // in scripts

    // in html
    matchRegex('<!--[^>]+FlexCMP[^>v]+v\\. ([\\d.]+)\\;version:\\1'),
    // in text

    // in css
])
