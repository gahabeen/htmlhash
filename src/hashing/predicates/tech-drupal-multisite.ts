import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/sites/(?!(?:default|all)/).*/(?:files|themes|modules)/'),
    // in dom
    matchSelector(`figure[style*='/sites/']`),
    matchSelector(`img[src*='/sites/'], img[srcset*='/sites/'], source[srcset*='/sites/']`),
    matchSelector(`style`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
