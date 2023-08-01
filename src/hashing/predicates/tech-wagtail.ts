import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`[data-block-key]`),
    matchSelector(`[style*='images/']`),
    matchSelector(`img[src*='images/']`),
    matchSelector(`img[srcset*='images/'], source[srcset*='images/']`),
    matchSelector(`meta[content*='images/']`),
    matchSelector(`style, script`),
    matchSelector(`video[poster*='images/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
