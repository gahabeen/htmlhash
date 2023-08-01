import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='.cloudinary.com/'], img[data-src*='.cloudinary.com/'], link[href*='.cloudinary.com/']`),
    // in js
    matchRegexInInnerHTML('script', '_cloudinary'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
