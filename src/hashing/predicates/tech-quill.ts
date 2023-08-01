import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div[class*='ql-editor'], div[class*='quill']`),
    matchSelector(`link[href*='cdn.quilljs.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'Quill'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
