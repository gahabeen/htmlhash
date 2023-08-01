import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='.ucarecdn.com/'], link[href*='ucarecdn.com'], img[data-src*='.ucarecdn.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'uploadcare.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
