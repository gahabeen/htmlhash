import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[data-name*='Picturepark'], img[data-srcset*='picturepark'], div[style*='picturepark'], source[srcset*='picturepark']`),
    // in js
    matchRegexInInnerHTML('script', 'pictureparkConfiguration'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
